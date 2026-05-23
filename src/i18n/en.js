export const en = {
  meta: {
    languageName: 'English',
    title: 'SysOps Linux | Server Administration, DevOps, Cloud — szulinek.pl',
    description:
      'Linux server administration, automation, monitoring, backups, security, Docker, Kubernetes, OpenStack and e-commerce infrastructure support.',
  },
  seo: {
    siteName: 'szulinek.pl',
    baseUrl: 'https://szulinek.pl',
    locale: 'en_US',
    image: 'https://szulinek.pl/og-image.svg',
    author: 'Adam Hałdaś',
    keywords:
      'SysOps, Linux administrator, server administration, DevOps, Docker, Kubernetes, OpenStack, AWS, monitoring, backup, security, HAProxy, Nginx',
    pages: {
      home: {
        title: 'SysOps Linux | Server Administration, DevOps, Cloud — szulinek.pl',
        description:
          'Linux server administration, automation, monitoring, backups, security, Docker, Kubernetes, OpenStack and e-commerce infrastructure support.',
      },
      services: {
        title: 'SysOps Services and Linux Administration — szulinek.pl',
        description:
          'Linux administration, cloud operations, containers, monitoring, backups, security, databases and emergency infrastructure support for companies.',
      },
      technologies: {
        title: 'Linux, Cloud, Docker and Kubernetes Technologies — szulinek.pl',
        description:
          'SysOps stack: Linux, OpenStack, AWS, Docker, Kubernetes, Ansible, HAProxy, Nginx, databases, monitoring, storage and security.',
      },
      experience: {
        title: 'SysOps / Cloud / Linux Experience — szulinek.pl',
        description:
          'Experience with high-availability infrastructure, OpenStack, AWS, Linux, containers, e-commerce, monitoring, backups and troubleshooting.',
      },
      contact: {
        title: 'Contact — Linux Server Administration — szulinek.pl',
        description:
          'Get in touch about Linux administration, infrastructure audit, monitoring, backups, DevOps, Cloud or emergency support.',
      },
    },
  },
  app: {
    skipLink: 'Skip to content',
    logoAria: 'SysOps Linux, go to the home page',
  },
  nav: {
    home: 'Home',
    services: 'Services',
    technologies: 'Technologies',
    experience: 'Experience',
    contact: 'Contact',
  },
  header: {
    navAria: 'Main navigation',
    mobileNavAria: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    contactAria: 'Go to contact page',
    languageAria: 'Change site language',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    socialsAria: 'Social profiles in the header',
  },
  profile: {
    name: 'Adam Hałdaś',
    email: 'adam@szulinek.pl',
    badge: 'Cloud Engineer / Linux Administrator / Operations Engineer',
    headline: 'Linux, Cloud and high-availability infrastructure without chaos',
    lead:
      'I help companies run stable Linux, OpenStack, AWS, container, monitoring, backup, database and enterprise e-commerce environments.',
    description:
      'I work across SysOps, Cloud and Linux operations: high availability, troubleshooting, automation, monitoring, storage, backups, security and performance optimization. My experience includes e-commerce environments based on Shopware, Magento, AKS, OpenStack, Galera/Percona clusters, HAProxy and a broad web stack.',
  },
  hero: {
    consultation: 'Book a consultation',
    consultationAria: 'Book a consultation on the contact page',
    servicesCta: 'View services',
    servicesAria: 'Go to the services page',
    socialsAria: 'Social profiles in the hero section',
    statusAria: 'Infrastructure service status',
    statusItems: [
      { label: 'HA stack', value: 'under control' },
      { label: 'Backup', value: 'verified' },
      { label: 'Alerts', value: 'active' },
    ],
  },
  socials: {
    navLabel: 'Social profiles',
    ariaLabels: {
      linkedin: 'Open Adam Hałdaś LinkedIn profile in a new tab',
      github: 'Open the szulinek GitHub profile in a new tab',
    },
  },
  terminalTicker: {
    aria: 'Animated terminal with sample SysOps commands',
    texts: [
      'sudo apt-get update skills',
      'ssh adam@szulinek.pl',
      'systemctl status infrastructure',
      'ansible-playbook deploy.yml',
      'kubectl get pods -A',
      'openstack server list',
      'tail -f /var/log/sysops.log',
      'cat /etc/skills | grep linux',
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
    title: 'Terminal profile summary',
    session: 'ops-session',
    prompt: 'adam@szulinek:~$ ./ops-profile --summary',
    lines: [
      'role      Cloud Engineer / Linux Administrator / Operations Engineer',
      'focus     HA infrastructure, Linux, cloud, containers, observability',
      'cloud     OpenStack, AWS, VMware, AKS',
      'runtime   Docker, Kubernetes, Docker Swarm, Nginx, Apache, PHP-FPM',
      'data      MySQL/MariaDB, PostgreSQL, Percona, Galera',
      'security  TLS/SSL, Cloudflare/WAF, CrowdSec, Fail2ban, iptables',
    ],
    metrics: [
      { label: 'Linux ops', value: 'systemd / networking / logs' },
      { label: 'Cloud', value: 'OpenStack / AWS / VMware' },
      { label: 'HA stack', value: 'HAProxy / Keepalived / Galera' },
    ],
  },
  services: {
    sectionAria: 'Server administration services',
    eyebrow: 'Services',
    title: 'Technical server care that keeps operational risk organized',
    description:
      'From one-off configuration to ongoing infrastructure maintenance, monitoring and incident support.',
    fullOffer: 'View the full offer',
    fullOfferAria: 'Go to the full services offer',
    audiencesEyebrow: 'Who I help',
    audiencesTitle: 'Support for teams without an in-house administrator',
    items: [
      {
        title: 'Linux administration and system operations',
        icon: 'server',
        description:
          'Debian/Ubuntu/CentOS/AlmaLinux maintenance, systemd, networking, patching, hardening, log analysis, strace and production troubleshooting.',
      },
      {
        title: 'Cloud and virtualization',
        icon: 'cloud',
        description:
          'OpenStack, AWS, VMware, VM lifecycle, snapshots, qcow2 exports, backup automation and hybrid infrastructure operations.',
      },
      {
        title: 'Monitoring and observability',
        icon: 'activity',
        description:
          'Zabbix, PMM, Elastic Stack, Fluentd/Fluent Bit, alerting, log analysis, bottleneck detection and service metrics.',
      },
      {
        title: 'Storage, backup and retention',
        icon: 'databaseBackup',
        description:
          'NFS, GlusterFS, S3 Object Storage, partitions, distributed storage, backup retention and recovery procedures.',
      },
      {
        title: 'Security and hardening',
        icon: 'shield',
        description:
          'TLS/SSL, firewall, iptables, Cloudflare/WAF, CrowdSec, Fail2ban, secure access and service configuration reviews.',
      },
      {
        title: 'Networking, DNS, SMTP and edge',
        icon: 'route',
        description:
          'HAProxy, Keepalived, DNS, SMTP, VPN/NAT/VLAN, TLS termination, traffic routing and network troubleshooting.',
      },
      {
        title: 'Operational automation',
        icon: 'workflow',
        description:
          'Ansible, Bash, Go, Cron, OpenStack CLI, operational scripts, checklists and automation of repeatable admin work.',
      },
      {
        title: 'Containers and orchestration',
        icon: 'box',
        description:
          'Docker, Kubernetes/AKS, Docker Swarm, ingress controllers, TLS termination and containerized application maintenance.',
      },
      {
        title: 'Web stack and e-commerce',
        icon: 'globe',
        description:
          'Nginx, Apache, PHP-FPM, Redis, Varnish, CDN, WordPress, Laravel, Magento and Shopware in production environments.',
      },
      {
        title: 'Databases and clusters',
        icon: 'lockKeyhole',
        description:
          'MySQL/MariaDB, PostgreSQL, Percona Cluster, Galera Multi-Master, replication, troubleshooting and database performance analysis.',
      },
      {
        title: 'Infrastructure audit',
        icon: 'searchCheck',
        description:
          'Review of Linux/cloud configuration, HA, backups, monitoring, security, databases and areas that need optimization.',
      },
      {
        title: 'Emergency support',
        icon: 'siren',
        description:
          'Fast diagnosis of incidents, performance issues, networking, certificates, databases, containers and web/e-commerce services.',
      },
    ],
    audiences: [
      'Small businesses',
      'Software houses',
      'E-commerce store owners',
      'Marketing agencies',
      'Startups',
      'People with a VPS/server but no administrator',
    ],
  },
  technologies: {
    aria: 'Technologies',
    eyebrow: 'Technologies',
    title: 'Tools chosen for stable service operations',
    description:
      'I work with a stack used in Linux/Cloud, HA and e-commerce environments: from the system layer to monitoring, databases, edge and security.',
    stackLabel: 'Administration stack',
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
    title: 'Skills grouped around real infrastructure operations',
    description:
      'The skill set focuses on stability, security and repeatable administration processes.',
    groups: [
      {
        title: 'Linux & Systems',
        description:
          'Linux administration, stability maintenance, hardening, patching, troubleshooting and performance analysis.',
        items: ['Debian / Ubuntu / CentOS / AlmaLinux', 'hardening', 'patching', 'troubleshooting', 'systemd', 'networking', 'performance analysis', 'strace', 'log analysis'],
      },
      {
        title: 'Cloud & Virtualization',
        description:
          'Cloud and virtual infrastructure operations with a focus on HA environments, backups and machine lifecycle.',
        items: ['OpenStack', 'AWS', 'VMware', 'VM lifecycle', 'snapshots', 'qcow2 exports', 'backup automation'],
      },
      {
        title: 'Containers & Orchestration',
        description:
          'Containerized application and orchestration maintenance, including traffic exposure, ingress and TLS termination.',
        items: ['Docker', 'Kubernetes / AKS', 'Docker Swarm', 'ingress controllers', 'TLS termination'],
      },
      {
        title: 'Automation & IaC',
        description:
          'Operational task automation, repeatable procedures and tools that support everyday infrastructure work.',
        items: ['Ansible', 'Bash', 'Go', 'Cron', 'OpenStack CLI', 'operational automation'],
      },
      {
        title: 'Monitoring & Observability',
        description:
          'Monitoring, log analysis, bottleneck detection and maintaining visibility across production services.',
        items: ['Zabbix', 'PMM', 'Elastic Stack', 'Fluentd / Fluent Bit', 'log analysis', 'bottleneck detection'],
      },
      {
        title: 'Databases',
        description:
          'Database and cluster maintenance, replication analysis, diagnostics and work around e-commerce environments.',
        items: ['MySQL / MariaDB', 'PostgreSQL', 'Percona Cluster', 'Galera Multi-Master', 'replication troubleshooting'],
      },
      {
        title: 'Networking & Security',
        description:
          'Network layer, service security, edge, WAF, access control and protection of internet-facing applications.',
        items: ['HAProxy', 'Keepalived', 'DNS', 'SMTP', 'TLS/SSL', 'VPN / NAT / VLAN', 'Cloudflare / WAF', 'CrowdSec / Fail2ban', 'iptables'],
      },
      {
        title: 'Storage & Backup',
        description:
          'Distributed storage, backup automation, data retention and procedures for predictable recovery.',
        items: ['NFS', 'GlusterFS', 'S3 Object Storage', 'partition management', 'distributed storage clusters', 'backup retention'],
      },
      {
        title: 'Web & E-commerce Stack',
        description:
          'Web stack maintenance for e-commerce environments, PHP applications and business-critical services.',
        items: ['Nginx', 'Apache', 'PHP-FPM', 'WordPress', 'Magento', 'Shopware', 'Laravel', 'Redis', 'Varnish', 'CDN'],
      },
    ],
  },
  process: {
    eyebrow: 'How I Work',
    title: 'A clear process instead of guesswork',
    description:
      'Every implementation has context, priorities and a documentation trail, so infrastructure is easier to maintain.',
    steps: [
      {
        title: 'Problem analysis',
        description:
          'I gather context, available logs, symptoms and business priorities to separate the root cause from noise.',
      },
      {
        title: 'Solution proposal',
        description: 'I outline the scope, risks, order of work and a sensible implementation path.',
      },
      {
        title: 'Implementation',
        description: 'I apply changes in controlled steps, with a rollback plan and communication during the work.',
      },
      {
        title: 'Documentation',
        description:
          'I leave configuration notes, procedures and key decisions so infrastructure is not a black box.',
      },
      {
        title: 'Monitoring and ongoing support',
        description: 'I set alerts, recurring checks and further care where continuity matters.',
      },
    ],
  },
  packages: {
    eyebrow: 'Packages',
    title: 'Typical collaboration scopes',
    description:
      'The scope is adjusted to your infrastructure, risk profile and whether you need one-off help or ongoing care.',
    cta: 'Individual estimate',
    ctaAria: 'Ask about package',
    items: [
      {
        name: 'Start',
        subtitle: 'One-off VPS configuration',
        features: [
          'Secure SSH access and users',
          'Firewall, updates and basic hardening',
          'WWW, SSL or selected service configuration',
        ],
      },
      {
        name: 'Care',
        subtitle: 'Monthly server maintenance',
        features: [
          'Updates, monitoring and alert response',
          'Backup and service health checks',
          'Support with changes and ongoing issues',
        ],
      },
      {
        name: 'Audit',
        subtitle: 'Security and performance analysis',
        features: [
          'Review of system and service configuration',
          'Backup, SSL, DNS and mail verification',
          'Report with priorities and an action plan',
        ],
      },
    ],
  },
  experience: {
    eyebrow: 'Experience',
    title: 'Technical experience translated into stable service operations',
    items: [
      {
        title: 'HA infrastructure and Linux operations',
        description:
          'Work around high-availability environments, Linux administration and ongoing production service maintenance.',
        points: ['Debian/Ubuntu/CentOS/AlmaLinux', 'systemd, networking, strace', 'hardening and patching'],
      },
      {
        title: 'Cloud, containers and automation',
        description:
          'Operations on OpenStack, AWS, VMware and container environments such as Docker, Kubernetes/AKS and Docker Swarm.',
        points: ['OpenStack CLI and VM lifecycle', 'Docker/Kubernetes/AKS', 'Ansible, Bash, Go'],
      },
      {
        title: 'Monitoring, storage and databases',
        description:
          'Service visibility, backups, storage and database work in environments that require stability and fast diagnosis.',
        points: ['Zabbix, PMM, Elastic Stack', 'NFS, GlusterFS, S3', 'Percona/Galera/PostgreSQL'],
      },
      {
        title: 'Web/e-commerce, networking and security',
        description:
          'Maintenance of web/e-commerce stacks and the edge, security and routing layers for internet services.',
        points: ['Shopware, Magento, PHP-FPM', 'HAProxy, Keepalived, TLS', 'Cloudflare/WAF, CrowdSec'],
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Tell me what is happening with your infrastructure',
    description:
      'Write whether this is about configuration, audit, migration, incident response, monitoring or ongoing server care.',
    emailCta: 'Write to me:',
    emailAria: 'Send an email to',
    socialsAria: 'Social profiles in the contact section',
    form: {
      name: 'Name',
      namePlaceholder: 'John',
      email: 'Email',
      emailPlaceholder: 'john@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'VPS configuration',
      message: 'Message',
      messagePlaceholder: 'Briefly describe the issue, service or environment.',
      submit: 'Send message',
      sending: 'Sending...',
      submitAria: 'Send contact form',
      sendingStatus: 'Sending message...',
      success: 'Thank you. The message has been sent and I will reply as soon as possible.',
      errorFallback: 'An error occurred while sending the form.',
      errorDefault: 'Could not send the message.',
    },
  },
  newsletter: {
    eyebrow: 'Newsletter',
    title: 'Technical notes straight to your inbox',
    description:
      'Short and practical notes about Linux, infrastructure, security, monitoring and automation.',
    emailLabel: 'Email address',
    emailPlaceholder: 'you@example.com',
    consentLabel: 'I agree to receive technical and offer-related messages from szulinek.pl.',
    submit: 'Sign me up',
    submitting: 'Saving...',
    formAria: 'Newsletter signup form',
    submitAria: 'Subscribe this email address to the newsletter',
    messages: {
      success: 'Thanks, your signup has been saved.',
      alreadySubscribed: 'This email is already subscribed.',
      validation: 'Please enter a valid email address and accept the consent.',
      invalidEmail: 'Please enter a valid email address and accept the consent.',
      consentRequired: 'Please enter a valid email address and accept the consent.',
      rateLimited: 'Too many attempts. Please try again shortly.',
      error: 'Could not save your signup. Please try again.',
    },
  },
  pages: {
    services: {
      eyebrow: 'Services',
      title: 'Linux operations, cloud, monitoring and infrastructure maintenance',
      description:
        'The collaboration scope can include Linux administration, OpenStack/AWS, containers, monitoring, backup, security, databases or emergency support.',
    },
    technologies: {
      eyebrow: 'Technologies',
      title: 'A SysOps stack for Linux, Cloud, HA and e-commerce',
      description:
        'Tools selected for stability, troubleshooting, automation, monitoring, security and predictable environment recovery.',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'SysOps / Cloud / Linux experience in production environments',
      description:
        'High availability, e-commerce, troubleshooting, monitoring, storage, backups, databases and operational automation.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Write what your infrastructure needs',
      description:
        'Briefly describe the problem, environment or scope of work. The form is sent to a Node.js backend and delivered through SMTP.',
    },
    notFound: {
      eyebrow: '404',
      title: 'Page not found',
      description:
        'This address does not exist or has been moved. Go back to the home page and choose the right section.',
      cta: 'Back to home',
      ctaAria: 'Return to the home page',
    },
  },
  footer: {
    description:
      'Linux administration, cloud operations, monitoring, backups, security and support for companies without an in-house infrastructure team.',
    copyright: 'All rights reserved.',
    quickLinksAria: 'Quick links in the footer',
    socialsAria: 'Social profiles in the footer',
  },
};
