export const pl = {
  meta: {
    languageName: 'Polski',
    title: 'SysOps Linux | Administracja serwerami, DevOps, Cloud — szulinek.pl',
    description:
      'Administracja serwerami Linux, automatyzacja, monitoring, backupy, bezpieczeństwo, Docker, Kubernetes, OpenStack i wsparcie infrastruktury e-commerce.',
  },
  seo: {
    siteName: 'szulinek.pl',
    baseUrl: 'https://szulinek.pl',
    locale: 'pl_PL',
    image: 'https://szulinek.pl/og-image.svg',
    author: 'Adam Hałdaś',
    keywords:
      'SysOps, Linux administrator, administracja serwerami, DevOps, Docker, Kubernetes, OpenStack, AWS, monitoring, backup, bezpieczeństwo, HAProxy, Nginx',
    pages: {
      home: {
        title: 'SysOps Linux | Administracja serwerami, DevOps, Cloud — szulinek.pl',
        description:
          'Administracja serwerami Linux, automatyzacja, monitoring, backupy, bezpieczeństwo, Docker, Kubernetes, OpenStack i wsparcie infrastruktury e-commerce.',
      },
      services: {
        title: 'Usługi SysOps i administracja Linux — szulinek.pl',
        description:
          'Administracja Linux, cloud operations, kontenery, monitoring, backupy, bezpieczeństwo, bazy danych i wsparcie awaryjne dla infrastruktury firmowej.',
      },
      technologies: {
        title: 'Technologie Linux, Cloud, Docker, Kubernetes — szulinek.pl',
        description:
          'Stack SysOps: Linux, OpenStack, AWS, Docker, Kubernetes, Ansible, HAProxy, Nginx, bazy danych, monitoring, storage i bezpieczeństwo.',
      },
      experience: {
        title: 'Doświadczenie SysOps / Cloud / Linux — szulinek.pl',
        description:
          'Doświadczenie w infrastrukturze wysokiej dostępności, OpenStack, AWS, Linux, kontenerach, e-commerce, monitoringu, backupach i troubleshooting.',
      },
      contact: {
        title: 'Kontakt — administracja serwerami Linux — szulinek.pl',
        description:
          'Skontaktuj się w sprawie administracji Linux, audytu infrastruktury, monitoringu, backupów, DevOps, Cloud lub wsparcia awaryjnego.',
      },
    },
  },
  app: {
    skipLink: 'Przejdź do treści',
    logoAria: 'SysOps Linux, przejdź do strony głównej',
  },
  nav: {
    home: 'Start',
    services: 'Usługi',
    technologies: 'Technologie',
    experience: 'Doświadczenie',
    contact: 'Kontakt',
  },
  header: {
    navAria: 'Główna nawigacja',
    mobileNavAria: 'Nawigacja mobilna',
    openMenu: 'Otwórz menu',
    closeMenu: 'Zamknij menu',
    contactAria: 'Przejdź do strony kontaktu',
    languageAria: 'Zmień język strony',
    themeToLight: 'Włącz tryb jasny',
    themeToDark: 'Włącz tryb ciemny',
    socialsAria: 'Profile społecznościowe w nagłówku',
  },
  profile: {
    name: 'Adam Hałdaś',
    email: 'adam@szulinek.pl',
    badge: 'Cloud Engineer / Linux Administrator / Operations Engineer',
    headline: 'Linux, Cloud i infrastruktura wysokiej dostępności bez chaosu',
    lead:
      'Pomagam utrzymywać stabilne środowiska Linux, OpenStack, AWS, kontenery, monitoring, backupy, bazy danych i stacki e-commerce klasy enterprise.',
    description:
      'Pracuję na styku SysOps, Cloud i Linux operations: wysoka dostępność, troubleshooting, automatyzacja, monitoring, storage, backupy, bezpieczeństwo i optymalizacja wydajności. Mam doświadczenie przy środowiskach e-commerce opartych m.in. o Shopware, Magento, AKS, OpenStack, klastry Galera/Percona, HAProxy i rozbudowany stack webowy.',
  },
  hero: {
    consultation: 'Umów konsultację',
    consultationAria: 'Umów konsultację na stronie kontaktu',
    servicesCta: 'Zobacz usługi',
    servicesAria: 'Przejdź do strony usług',
    socialsAria: 'Profile społecznościowe w sekcji głównej',
    statusAria: 'Status usług infrastrukturalnych',
    statusItems: [
      { label: 'HA stack', value: 'pod kontrolą' },
      { label: 'Backup', value: 'zweryfikowany' },
      { label: 'Alerty', value: 'aktywne' },
    ],
  },
  socials: {
    navLabel: 'Profile społecznościowe',
    ariaLabels: {
      linkedin: 'Otwórz profil LinkedIn Adama Hałdasia w nowej karcie',
      github: 'Otwórz profil GitHub szulinek w nowej karcie',
    },
  },
  terminalTicker: {
    aria: 'Animowany terminal z przykładowymi komendami SysOps',
    texts: [
      'sudo apt-get update umiejetnosci',
      'ssh adam@szulinek.pl',
      'systemctl status infrastruktura',
      'ansible-playbook deploy.yml',
      'kubectl get pods -A',
      'openstack server list',
      'tail -f /var/log/sysops.log',
      'cat /etc/umiejetnosci | grep linux',
      'backup --verify --retention',
      'watch -n1 uptime',
    ],
    mobileTexts: [
      'uptime',
      'whoami',
      'ssh adam',
      'cat skills',
      'kubectl pods',
      'systemctl status',
      'tail -f logs',
    ],
  },
  terminalProfile: {
    title: 'Terminalowe podsumowanie profilu',
    session: 'ops-session',
    prompt: 'adam@szulinek:~$ ./ops-profile --summary',
    lines: [
      'rola      Cloud Engineer / Linux Administrator / Operations Engineer',
      'fokus     HA infrastructure, Linux, cloud, containers, observability',
      'chmura    OpenStack, AWS, VMware, AKS',
      'runtime   Docker, Kubernetes, Docker Swarm, Nginx, Apache, PHP-FPM',
      'dane      MySQL/MariaDB, PostgreSQL, Percona, Galera',
      'security  TLS/SSL, Cloudflare/WAF, CrowdSec, Fail2ban, iptables',
    ],
    metrics: [
      { label: 'Linux ops', value: 'systemd / networking / logs' },
      { label: 'Cloud', value: 'OpenStack / AWS / VMware' },
      { label: 'HA stack', value: 'HAProxy / Keepalived / Galera' },
    ],
  },
  services: {
    sectionAria: 'Usługi administracji serwerami',
    eyebrow: 'Usługi',
    title: 'Techniczna opieka nad serwerami, która porządkuje ryzyko',
    description:
      'Od jednorazowej konfiguracji po stałe utrzymanie infrastruktury, monitoring i wsparcie przy awariach.',
    fullOffer: 'Zobacz pełną ofertę',
    fullOfferAria: 'Przejdź do pełnej oferty usług',
    audiencesEyebrow: 'Dla kogo',
    audiencesTitle: 'Wsparcie dla zespołów bez własnego administratora',
    items: [
      {
        title: 'Administracja Linux i system operations',
        icon: 'server',
        description:
          'Utrzymanie Debian/Ubuntu/CentOS/AlmaLinux, systemd, sieć, patching, hardening, analiza logów, strace i diagnoza problemów produkcyjnych.',
      },
      {
        title: 'Cloud i wirtualizacja',
        icon: 'cloud',
        description:
          'OpenStack, AWS, VMware, cykl życia VM, snapshoty, eksporty qcow2, automatyzacja backupów i operacje na infrastrukturze hybrydowej.',
      },
      {
        title: 'Monitoring i observability',
        icon: 'activity',
        description:
          'Zabbix, PMM, Elastic Stack, Fluentd/Fluent Bit, alerting, analiza logów, wykrywanie wąskich gardeł i metryki usług.',
      },
      {
        title: 'Storage, backup i retencja',
        icon: 'databaseBackup',
        description:
          'NFS, GlusterFS, S3 Object Storage, partycje, storage rozproszony, backup retention oraz procedury odtwarzania.',
      },
      {
        title: 'Security i hardening',
        icon: 'shield',
        description:
          'TLS/SSL, firewall, iptables, Cloudflare/WAF, CrowdSec, Fail2ban, bezpieczne dostępy i przegląd konfiguracji usług.',
      },
      {
        title: 'Sieć, DNS, SMTP i edge',
        icon: 'route',
        description:
          'HAProxy, Keepalived, DNS, SMTP, VPN/NAT/VLAN, terminacja TLS, routing ruchu i rozwiązywanie problemów sieciowych.',
      },
      {
        title: 'Automatyzacja operacyjna',
        icon: 'workflow',
        description:
          'Ansible, Bash, Go, Cron, OpenStack CLI, skrypty operacyjne, checklisty i automatyzacja powtarzalnych zadań administracyjnych.',
      },
      {
        title: 'Kontenery i orkiestracja',
        icon: 'box',
        description:
          'Docker, Kubernetes/AKS, Docker Swarm, ingress controllers, TLS termination oraz utrzymanie aplikacji kontenerowych.',
      },
      {
        title: 'Web stack i e-commerce',
        icon: 'globe',
        description:
          'Nginx, Apache, PHP-FPM, Redis, Varnish, CDN, WordPress, Laravel, Magento i Shopware w środowiskach produkcyjnych.',
      },
      {
        title: 'Bazy danych i klastry',
        icon: 'lockKeyhole',
        description:
          'MySQL/MariaDB, PostgreSQL, Percona Cluster, Galera Multi-Master, replikacja, troubleshooting i analiza wydajności baz.',
      },
      {
        title: 'Audyt infrastruktury',
        icon: 'searchCheck',
        description:
          'Przegląd konfiguracji Linux/cloud, HA, backupów, monitoringu, bezpieczeństwa, baz danych oraz miejsc wymagających optymalizacji.',
      },
      {
        title: 'Wsparcie awaryjne',
        icon: 'siren',
        description:
          'Szybka diagnoza awarii, problemów z wydajnością, siecią, certyfikatami, bazami, kontenerami i usługami web/e-commerce.',
      },
    ],
    audiences: [
      'Małe firmy',
      "Software house'y",
      'Właściciele sklepów internetowych',
      'Agencje marketingowe',
      'Startupy',
      'Osoby mające VPS/serwer, ale bez administratora',
    ],
  },
  technologies: {
    aria: 'Technologie',
    eyebrow: 'Technologie',
    title: 'Narzędzia dobrane do stabilnego utrzymania usług',
    description:
      'Pracuję na stacku używanym w środowiskach Linux/Cloud, HA i e-commerce: od warstwy systemowej po monitoring, bazy, edge i bezpieczeństwo.',
    stackLabel: 'Stack administracyjny',
    items: [
      'Linux',
      'Debian',
      'Ubuntu',
      'CentOS',
      'AlmaLinux',
      'OpenStack',
      'AWS',
      'VMware',
      'Nginx',
      'Apache',
      'PHP-FPM',
      'MySQL/MariaDB',
      'PostgreSQL',
      'Percona Cluster',
      'Galera',
      'Docker',
      'Kubernetes/AKS',
      'Docker Swarm',
      'Ansible',
      'Bash',
      'Go',
      'Git',
      'HAProxy',
      'Keepalived',
      'Cloudflare',
      'WAF',
      'DNS',
      'SMTP',
      'TLS/SSL',
      'Zabbix',
      'PMM',
      'Elastic Stack',
      'Fluentd / Fluent Bit',
      'NFS',
      'GlusterFS',
      'S3 Object Storage',
      'Redis',
      'Varnish',
      'Magento',
      'Shopware',
    ],
    groups: [
      {
        title: 'Linux & Systems',
        items: ['Debian', 'Ubuntu', 'CentOS', 'AlmaLinux', 'systemd', 'networking', 'strace'],
      },
      {
        title: 'Cloud & Virtualization',
        items: ['OpenStack', 'AWS', 'VMware', 'VM lifecycle', 'snapshots', 'qcow2 exports'],
      },
      {
        title: 'Containers & Orchestration',
        items: ['Docker', 'Kubernetes / AKS', 'Docker Swarm', 'ingress controllers', 'TLS termination'],
      },
      {
        title: 'Monitoring & Observability',
        items: ['Zabbix', 'PMM', 'Elastic Stack', 'Fluentd / Fluent Bit', 'bottleneck detection'],
      },
      {
        title: 'Networking & Security',
        items: ['HAProxy', 'Keepalived', 'DNS', 'SMTP', 'Cloudflare / WAF', 'CrowdSec', 'Fail2ban', 'iptables'],
      },
      {
        title: 'Web & E-commerce',
        items: ['Nginx', 'Apache', 'PHP-FPM', 'Redis', 'Varnish', 'Magento', 'Shopware', 'Laravel'],
      },
    ],
  },
  skills: {
    eyebrow: 'Skills',
    title: 'Umiejętności uporządkowane pod realne utrzymanie infrastruktury',
    description:
      'Kompetencje skupiają się na stabilności, bezpieczeństwie i powtarzalnych procesach administracyjnych.',
    groups: [
      {
        title: 'Linux & Systems',
        description:
          'Administracja systemami Linux, utrzymanie stabilności, hardening, patching, troubleshooting i analiza wydajności.',
        items: ['Debian / Ubuntu / CentOS / AlmaLinux', 'hardening', 'patching', 'troubleshooting', 'systemd', 'networking', 'performance analysis', 'strace', 'log analysis'],
      },
      {
        title: 'Cloud & Virtualization',
        description:
          'Operacje na infrastrukturze chmurowej i wirtualnej, z naciskiem na środowiska HA, backupy i cykl życia maszyn.',
        items: ['OpenStack', 'AWS', 'VMware', 'VM lifecycle', 'snapshots', 'qcow2 exports', 'backup automation'],
      },
      {
        title: 'Containers & Orchestration',
        description:
          'Utrzymanie aplikacji kontenerowych i orkiestracji, w tym wystawianie ruchu, ingress i terminacja TLS.',
        items: ['Docker', 'Kubernetes / AKS', 'Docker Swarm', 'ingress controllers', 'TLS termination'],
      },
      {
        title: 'Automation & IaC',
        description:
          'Automatyzacja zadań operacyjnych, powtarzalne procedury i narzędzia wspierające codzienną pracę infrastrukturalną.',
        items: ['Ansible', 'Bash', 'Go', 'Cron', 'OpenStack CLI', 'operational automation'],
      },
      {
        title: 'Monitoring & Observability',
        description:
          'Monitoring, analiza logów, wykrywanie wąskich gardeł i utrzymanie widoczności usług produkcyjnych.',
        items: ['Zabbix', 'PMM', 'Elastic Stack', 'Fluentd / Fluent Bit', 'log analysis', 'bottleneck detection'],
      },
      {
        title: 'Databases',
        description:
          'Utrzymanie baz danych i klastrów, analiza replikacji, diagnostyka problemów i praca przy środowiskach e-commerce.',
        items: ['MySQL / MariaDB', 'PostgreSQL', 'Percona Cluster', 'Galera Multi-Master', 'replication troubleshooting'],
      },
      {
        title: 'Networking & Security',
        description:
          'Warstwa sieciowa, bezpieczeństwo usług, edge, WAF, kontrola dostępu i ochrona aplikacji wystawionych do internetu.',
        items: ['HAProxy', 'Keepalived', 'DNS', 'SMTP', 'TLS/SSL', 'VPN / NAT / VLAN', 'Cloudflare / WAF', 'CrowdSec / Fail2ban', 'iptables'],
      },
      {
        title: 'Storage & Backup',
        description:
          'Storage rozproszony, automatyzacja backupów, retencja danych i procedury umożliwiające przewidywalne odtwarzanie.',
        items: ['NFS', 'GlusterFS', 'S3 Object Storage', 'partition management', 'distributed storage clusters', 'backup retention'],
      },
      {
        title: 'Web & E-commerce Stack',
        description:
          'Utrzymanie stacku webowego dla środowisk e-commerce, aplikacji PHP i usług o dużym znaczeniu biznesowym.',
        items: ['Nginx', 'Apache', 'PHP-FPM', 'WordPress', 'Magento', 'Shopware', 'Laravel', 'Redis', 'Varnish', 'CDN'],
      },
    ],
  },
  process: {
    eyebrow: 'Jak pracuję',
    title: 'Jasny proces zamiast zgadywania w ciemno',
    description:
      'Każde wdrożenie ma kontekst, priorytety i ślad dokumentacyjny, żeby infrastruktura była łatwiejsza do utrzymania.',
    steps: [
      {
        title: 'Analiza problemu',
        description:
          'Zbieram kontekst, dostępne logi, objawy i priorytety biznesowe, żeby szybko oddzielić przyczynę od szumu.',
      },
      {
        title: 'Propozycja rozwiązania',
        description: 'Przedstawiam zakres prac, ryzyka, kolejność działań i sensowny wariant wdrożenia.',
      },
      {
        title: 'Wdrożenie',
        description:
          'Wprowadzam zmiany kontrolowanymi krokami, z planem cofnięcia i komunikacją w trakcie prac.',
      },
      {
        title: 'Dokumentacja',
        description:
          'Zostawiam opis konfiguracji, procedury i najważniejsze decyzje, żeby infrastruktura nie była czarną skrzynką.',
      },
      {
        title: 'Monitoring i dalsze wsparcie',
        description: 'Ustalam alerty, cykliczne kontrole i dalszą opiekę tam, gdzie potrzebna jest ciągłość.',
      },
    ],
  },
  packages: {
    eyebrow: 'Pakiety',
    title: 'Typowe zakresy współpracy',
    description:
      'Zakres dopasowuję do infrastruktury, ryzyka i tego, czy potrzebujesz jednorazowej pomocy, czy stałej opieki.',
    cta: 'Wycena indywidualna',
    ctaAria: 'Zapytaj o pakiet',
    items: [
      {
        name: 'Start',
        subtitle: 'Jednorazowa konfiguracja VPS',
        features: [
          'Bezpieczny dostęp SSH i użytkownicy',
          'Firewall, aktualizacje i podstawowy hardening',
          'Konfiguracja WWW, SSL lub wybranych usług',
        ],
      },
      {
        name: 'Opieka',
        subtitle: 'Miesięczne utrzymanie serwera',
        features: [
          'Aktualizacje, monitoring i reakcja na alerty',
          'Kontrola backupów oraz kondycji usług',
          'Wsparcie przy zmianach i bieżących problemach',
        ],
      },
      {
        name: 'Audyt',
        subtitle: 'Analiza bezpieczeństwa i wydajności',
        features: [
          'Przegląd konfiguracji systemu i usług',
          'Weryfikacja backupów, SSL, DNS i poczty',
          'Raport z priorytetami oraz planem działań',
        ],
      },
    ],
  },
  experience: {
    eyebrow: 'Doświadczenie',
    title: 'Profil techniczny przełożony na spokojne utrzymanie usług',
    items: [
      {
        title: 'Infrastruktura HA i Linux operations',
        description:
          'Praca przy środowiskach wysokiej dostępności, administracji Linux i bieżącym utrzymaniu usług produkcyjnych.',
        points: ['Debian/Ubuntu/CentOS/AlmaLinux', 'systemd, networking, strace', 'hardening i patching'],
      },
      {
        title: 'Cloud, kontenery i automatyzacja',
        description:
          'Operacje na OpenStack, AWS, VMware oraz środowiskach kontenerowych Docker, Kubernetes/AKS i Docker Swarm.',
        points: ['OpenStack CLI i VM lifecycle', 'Docker/Kubernetes/AKS', 'Ansible, Bash, Go'],
      },
      {
        title: 'Monitoring, storage i bazy danych',
        description:
          'Widoczność usług, backupy, storage i praca z bazami danych w środowiskach wymagających stabilności i szybkiej diagnozy.',
        points: ['Zabbix, PMM, Elastic Stack', 'NFS, GlusterFS, S3', 'Percona/Galera/PostgreSQL'],
      },
      {
        title: 'Web/e-commerce, sieć i security',
        description:
          'Utrzymanie stacków web/e-commerce oraz warstwy edge, bezpieczeństwa i routingu dla usług internetowych.',
        points: ['Shopware, Magento, PHP-FPM', 'HAProxy, Keepalived, TLS', 'Cloudflare/WAF, CrowdSec'],
      },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Opowiedz, co dzieje się z Twoją infrastrukturą',
    description:
      'Napisz, czy chodzi o konfigurację, audyt, migrację, awarię, monitoring albo stałą opiekę nad serwerem.',
    emailCta: 'Napisz do mnie:',
    emailAria: 'Napisz wiadomość email na adres',
    socialsAria: 'Profile społecznościowe w sekcji kontaktu',
    form: {
      name: 'Imię',
      namePlaceholder: 'Jan',
      email: 'Email',
      emailPlaceholder: 'jan@example.pl',
      subject: 'Temat',
      subjectPlaceholder: 'Konfiguracja VPS',
      message: 'Wiadomość',
      messagePlaceholder: 'Krótko opisz problem, usługę lub środowisko.',
      submit: 'Wyślij wiadomość',
      sending: 'Wysyłanie...',
      submitAria: 'Wyślij formularz kontaktowy',
      sendingStatus: 'Wysyłam wiadomość...',
      success:
        'Dziękuję. Wiadomość została wysłana i wrócę z odpowiedzią możliwie szybko.',
      errorFallback: 'Wystąpił błąd podczas wysyłania formularza.',
      errorDefault: 'Nie udało się wysłać wiadomości.',
    },
  },
  newsletter: {
    eyebrow: 'Newsletter',
    title: 'Techniczne notatki prosto na maila',
    description:
      'Krótko i konkretnie: Linux, infrastruktura, bezpieczeństwo, monitoring i automatyzacja.',
    emailLabel: 'Adres e-mail',
    emailPlaceholder: 'twoj@email.pl',
    consentLabel: 'Wyrażam zgodę na otrzymywanie wiadomości technicznych i ofertowych od szulinek.pl.',
    submit: 'Zapisz mnie',
    submitting: 'Zapisuję...',
    formAria: 'Formularz zapisu do newslettera',
    submitAria: 'Zapisz adres e-mail do newslettera',
    messages: {
      success: 'Dziękuję, zapis został przyjęty.',
      alreadySubscribed: 'Ten adres jest już zapisany.',
      validation: 'Podaj poprawny adres e-mail i zaakceptuj zgodę.',
      invalidEmail: 'Podaj poprawny adres e-mail i zaakceptuj zgodę.',
      consentRequired: 'Podaj poprawny adres e-mail i zaakceptuj zgodę.',
      rateLimited: 'Za dużo prób. Spróbuj ponownie za chwilę.',
      error: 'Nie udało się zapisać. Spróbuj ponownie.',
    },
  },
  pages: {
    services: {
      eyebrow: 'Usługi',
      title: 'Linux operations, cloud, monitoring i utrzymanie infrastruktury',
      description:
        'Zakres współpracy może obejmować administrację Linux, OpenStack/AWS, kontenery, monitoring, backup, security, bazy danych albo wsparcie awaryjne.',
    },
    technologies: {
      eyebrow: 'Technologie',
      title: 'Stack SysOps dla Linux, Cloud, HA i e-commerce',
      description:
        'Narzędzia dobrane pod stabilność, troubleshooting, automatyzację, monitoring, bezpieczeństwo i przewidywalne odtwarzanie środowisk.',
    },
    experience: {
      eyebrow: 'Doświadczenie',
      title: 'Doświadczenie SysOps / Cloud / Linux w środowiskach produkcyjnych',
      description:
        'Wysoka dostępność, e-commerce, troubleshooting, monitoring, storage, backupy, bazy danych i automatyzacja operacyjna.',
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Napisz, czego potrzebuje Twoja infrastruktura',
      description:
        'Opisz krótko problem, środowisko albo zakres prac. Formularz trafi do backendu Node.js i zostanie wysłany przez SMTP.',
    },
    notFound: {
      eyebrow: '404',
      title: 'Nie znaleziono strony',
      description:
        'Ten adres nie istnieje albo został przeniesiony. Wróć na stronę główną i wybierz właściwą sekcję.',
      cta: 'Wróć na start',
      ctaAria: 'Wróć na stronę główną',
    },
  },
  footer: {
    description:
      'Administracja Linux, cloud operations, monitoring, backupy, bezpieczeństwo i wsparcie dla firm bez własnego działu infrastruktury.',
    copyright: 'Wszelkie prawa zastrzeżone.',
    quickLinksAria: 'Szybkie linki w stopce',
    socialsAria: 'Profile społecznościowe w stopce',
  },
};
