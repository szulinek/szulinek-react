import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import { promises as fs } from 'fs';
import { dirname, resolve, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: resolve(__dirname, '.env'),
});

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json({ limit: '64kb' }));

const requiredEnv = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_SECURE',
  'SMTP_USER',
  'SMTP_PASS',
  'CONTACT_TO',
];

const newsletterDataDir = join(__dirname, 'data');
const newsletterFile = join(newsletterDataDir, 'newsletter-subscribers.json');

function missingSmtpConfig() {
  return requiredEnv.filter((key) => !process.env[key]);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function pruneSubscribers(subscribers) {
  const maxEntries = 5000;
  const retentionDays = 365;
  const cutoff = Date.now() - retentionDays * 24 * 60 * 60 * 1000;

  return subscribers
    .filter((subscriber) => {
      const createdAt = new Date(subscriber.createdAt).getTime();
      return Number.isFinite(createdAt) && createdAt >= cutoff;
    })
    .slice(-maxEntries);
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function ensureNewsletterStorage() {
  await fs.mkdir(newsletterDataDir, { recursive: true });

  try {
    await fs.access(newsletterFile);
  } catch {
    await fs.writeFile(newsletterFile, '[]\n', 'utf8');
  }
}

async function readSubscribers() {
  await ensureNewsletterStorage();

  const raw = await fs.readFile(newsletterFile, 'utf8');

  if (!raw.trim()) {
    return [];
  }

  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    throw new Error('Newsletter storage is not an array');
  }

  return parsed;
}

async function writeSubscribers(subscribers) {
  await ensureNewsletterStorage();

  await fs.writeFile(
    newsletterFile,
    JSON.stringify(subscribers, null, 2) + '\n',
    'utf8'
  );
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/newsletter', async (req, res) => {
  const email = String(req.body?.email || '').trim().toLowerCase();
  const consent = req.body?.consent === true;

  if (!isValidEmail(email) || !consent) {
    return res.status(400).json({
      error: 'Podaj poprawny adres e-mail i zaakceptuj zgodę.',
    });
  }

  try {
    const subscribers = await readSubscribers();

    const exists = subscribers.some((subscriber) => {
      return String(subscriber.email || '').toLowerCase() === email;
    });

    if (exists) {
      return res.status(409).json({
        error: 'Ten adres jest już zapisany.',
      });
    }

    const subscriber = {
      email,
      createdAt: new Date().toISOString(),
      source: 'website',
      consent: true,
    };

    const cleanedSubscribers = pruneSubscribers(subscribers);
    cleanedSubscribers.push(subscriber);

    await writeSubscribers(cleanedSubscribers);

    try {
      const missingConfig = missingSmtpConfig();

      if (missingConfig.length === 0) {
        const transporter = createTransporter();

        await transporter.sendMail({
          from: `"Newsletter SysOps" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_TO,
          subject: 'Nowy zapis do newslettera',
          text: [
            'Nowy zapis do newslettera:',
            '',
            `Email: ${email}`,
            `Data: ${subscriber.createdAt}`,
          ].join('\n'),
        });
      }
    } catch (mailError) {
      console.error('Newsletter notification failed:', mailError);
    }

    return res.status(201).json({
      ok: true,
      message: 'Dziękuję, zapis został przyjęty.',
    });
  } catch (error) {
    console.error('Newsletter signup failed:', error);

    return res.status(500).json({
      error: 'Nie udało się zapisać. Spróbuj ponownie.',
    });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: 'Uzupełnij wszystkie pola formularza.',
    });
  }

  const missingConfig = missingSmtpConfig();

  if (missingConfig.length > 0) {
    return res.status(500).json({
      error: 'Brakuje konfiguracji SMTP: ' + missingConfig.join(', '),
    });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  try {
    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"Formularz SysOps" <${process.env.SMTP_USER}>`,
      replyTo: `"${safeName}" <${email}>`,
      to: process.env.CONTACT_TO,
      subject: `[Strona SysOps] ${subject}`,
      text: [
        `Imię: ${name}`,
        `Email: ${email}`,
        `Temat: ${subject}`,
        '',
        message,
      ].join('\n'),
      html: `
        <h2>Nowa wiadomość ze strony SysOps Linux</h2>
        <p><strong>Imię:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Temat:</strong> ${safeSubject}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return res.json({ ok: true });
  } catch (error) {
    console.error('Contact form delivery failed:', error);

    return res.status(502).json({
      error: 'Nie udało się wysłać wiadomości przez SMTP.',
    });
  }
});

app.listen(port, '127.0.0.1', () => {
  console.log(`API listening on http://127.0.0.1:${port}`);
});
