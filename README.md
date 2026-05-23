# SysOps Linux Freelancer

Nowoczesna strona ofertowa dla freelancera SysOps / Administratora Linux. Frontend działa w React, Vite i Tailwind CSS, a formularz kontaktowy wysyła wiadomości przez prosty backend Node.js + Express + Nodemailer.

## Instalacja

```bash
npm install
```

## Konfiguracja SMTP

Dane SMTP wpisz po stronie backendu w pliku:

```bash
server/.env
```

Najprościej skopiować przykład:

```bash
cp server/.env.example server/.env
```

Następnie uzupełnij zmienne:

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_SECURE=
SMTP_USER=
SMTP_PASS=
CONTACT_TO=adam@szulinek.pl
PORT=3001
```

Prawdziwy plik `server/.env` jest ignorowany przez Git i nie powinien być commitowany.

## Uruchomienie frontendu

```bash
npm run dev
```

Domyślny adres Vite:

```bash
http://localhost:5173/
```

## Uruchomienie backendu

W drugim terminalu uruchom:

```bash
npm run server
```

Do pracy developerskiej możesz użyć:

```bash
npm run dev:server
```

Backend nasłuchuje domyślnie na:

```bash
http://localhost:3001/
```

Endpoint formularza kontaktowego:

```bash
POST /api/contact
```

Endpoint newslettera:

```bash
POST /api/newsletter
```

Payload:

```json
{
  "email": "user@example.com",
  "consent": true
}
```

Vite ma skonfigurowane proxy `/api` na `http://localhost:3001`, więc frontend może wysyłać formularze przez `/api/contact` i `/api/newsletter`.

## Newsletter

Zapisy do newslettera są zapisywane lokalnie w pliku:

```bash
server/data/newsletter-subscribers.json
```

Ten plik jest ignorowany przez Git, ponieważ może zawierać prawdziwe adresy e-mail. Przykładowy format znajduje się w:

```bash
server/data/newsletter-subscribers.example.json
```

Endpoint `/api/newsletter` sprawdza poprawność adresu e-mail, wymaga zgody, nie zapisuje duplikatów i ma prosty in-memory rate limit.

Produkcyjnie lepiej przenieść newsletter do narzędzia lub trwałej bazy danych, np.:

- MailerLite
- Brevo
- Mailchimp
- PostgreSQL, SQLite albo inna własna baza

Migracja z JSON do bazy polega na zastąpieniu funkcji odczytu/zapisu pliku w `server/index.js` operacjami na tabeli, np. `newsletter_subscribers` z kolumnami `email`, `created_at`, `source` i `consent`. Warto dodać unikalny indeks na `email`, żeby duplikaty były blokowane również na poziomie bazy.

## Build

```bash
npm run build
```

Podgląd buildu:

```bash
npm run preview
```

## Edycja treści

Treści PL/EN znajdują się w:

```bash
src/i18n/pl.js
src/i18n/en.js
```

Routing i ścieżki językowe są w `src/data/navigation.js`, social linki w `src/data/socials.js`, a konfiguracja motywu w `src/data/themeConfig.js`.
