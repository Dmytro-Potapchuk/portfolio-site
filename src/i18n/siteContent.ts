export type Language = 'pl' | 'en';

export type NavKeys = {
  home: string;
  about: string;
  technologies: string;
  portfolio: string;
  services: string;
  contact: string;
};

export type SiteStrings = {
  nav: NavKeys;
  brand: string;
  footer: { rights: string };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    ctaContact: string;
    ctaPortfolio: string;
    stats: Array<{ label: string; value: string }>;
    aboutTitle: string;
    aboutLead: string;
    highlights: string[];
    experienceTitle: string;
    experienceCta: string;
    experienceItems: Array<{ role: string; company: string; period: string; points: string[] }>;
  };
  about: {
    title: string;
    paragraphs: string[];
    githubCta: string;
  };
  technologies: {
    title: string;
    frontend: string;
    backend: string;
    tools: string;
  };
  services: {
    title: string;
    items: Array<{ title: string; description: string; icon: string }>;
  };
  portfolio: {
    title: string;
    subtitle: string;
    viewRepo: string;
    viewLive: string;
    viewRepoBackend: string;
    viewRepoMobile: string;
  };
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    linksLabel: string;
  };
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    errors: { name: string; email: string; message: string };
    charCount: string;
    honeypotLabel: string;
  };
};

export const siteContent: Record<Language, SiteStrings> = {
  pl: {
    nav: {
      home: 'Strona główna',
      about: 'O mnie',
      technologies: 'Technologie',
      portfolio: 'Portfolio',
      services: 'Usługi',
      contact: 'Kontakt',
    },
    brand: 'Dmytro Potapchuk',
    footer: { rights: 'Wszystkie prawa zastrzeżone.' },
    home: {
      badge: 'Full-Stack Developer | React / NestJS / .NET',
      title: 'Skalowalne aplikacje webowe z myślą o biznesie.',
      subtitle:
        'Projektuję architekturę backendu, refaktoryzuję legacy i dostarczam nowoczesne interfejsy. Stabilność, testy i wdrożenia na poziomie enterprise.',
      ctaContact: 'Napisz wiadomość',
      ctaPortfolio: 'Zobacz portfolio',
      stats: [
        { label: 'Pokrycie testami (projekt prod.)', value: '95%' },
        { label: 'Lata doświadczenia', value: '3+' },
        { label: 'Repozytoria i projekty', value: '20+' },
      ],
      aboutTitle: 'W skrócie',
      aboutLead:
        'Full-Stack Developer i inżynier informatyki — backend (NestJS, Node.js, .NET), bazy relacyjne i NoSQL, chmura AWS/Azure, frontend w React i TypeScript.',
      highlights: [
        'PayFlow (produkt komercyjny): NestJS, MongoDB, integracja PayU, Swagger, React Native + Expo, testy >95%',
        'Odzyskiwanie i stabilizacja produkcji: modularna architektura, PostgreSQL, testy automatyczne',
        'REST API, Docker, CI/CD, monitoring (m.in. Prometheus)',
      ],
      experienceTitle: 'Doświadczenie',
      experienceCta: 'Pełna ścieżka — w sekcji O mnie i poniżej',
      experienceItems: [
        {
          role: 'Full-Stack Developer (produkt PayFlow)',
          company: 'Komercyjny produkt płatniczy',
          period: '2025 — obecnie',
          points: [
            'Backend NestJS, TypeScript, MongoDB, JWT, REST, dokumentacja Swagger, integracja PayU, serwis walut i wiadomości; Docker, CI/CD, monitoring (Prometheus).',
            'Aplikacja mobilna: React Native, Expo, TypeScript — pokrycie testami >95% (backend + frontend).',
            'Środowisko demo/sandbox: dom.payflow.waw.pl — repozytoria: backend-pay-flow, PayFlow.',
          ],
        },
        {
          role: 'Full-Stack Developer',
          company: 'Wolontariat Onkologiczny',
          period: '2026 — obecnie',
          points: [
            'Stabilizacja produkcji, NestJS + PostgreSQL, architektura modularna.',
            'Testy automatyczne ~95% pokrycia.',
          ],
        },
        {
          role: 'Full-Stack Developer',
          company: 'Enigma Information Security Systems',
          period: '2024 — 2025',
          points: [
            'React, TypeScript, NestJS, Node.js, bazy danych, AWS i Azure.',
            'Optymalizacja SQL i wydajności platform.',
          ],
        },
        {
          role: 'Full-Stack Developer (kontrakt)',
          company: 'SolarGen',
          period: '2023 (6 mies.)',
          points: [
            'Migracja z WordPress do dedykowanego backendu.',
            'NestJS, MySQL, komponenty React.',
          ],
        },
      ],
    },
    about: {
      title: 'O mnie',
      paragraphs: [
        'Nazywam się Dmytro Potapchuk i jestem Full-Stack Developerem z tytułem inżyniera informatyki. Realizuję projekty dla klientów i firm z różnych branż, ze szczególnym naciskiem na backend i architekturę.',
        'Specjalizuję się w aplikacjach webowych i mobilnych (React Native, Expo), desktopowych, automatyzacji procesów oraz integracjach z systemami zewnętrznymi. Realizuję m.in. produkt PayFlow (płatności, PayU, API NestJS z dokumentacją Swagger) oraz mam doświadczenie w e-commerce (części motoryzacyjne), panelach administracyjnych i migracji logiki z WordPress do dedykowanego backendu.',
        'W stacku: React, TypeScript, NestJS, Node.js, .NET, Docker, AWS i Azure. Bazy: MySQL, PostgreSQL, MongoDB, SQL Server, SQLite. Buduję REST API, wdrażam CI/CD i optymalizuję backend pod skalowalność.',
        'Studiuję na Uniwersytecie VIZJA w Warszawie (kierunek informatyczny). Języki: ukraiński (ojczysty), polski (C2), rosyjski (C1), angielski (B1).',
      ],
      githubCta: 'Profil GitHub',
    },
    technologies: {
      title: 'Technologie',
      frontend: 'Frontend',
      backend: 'Backend i dane',
      tools: 'Narzędzia i DevOps',
    },
    services: {
      title: 'Usługi',
      items: [
        {
          title: 'Strony i landingi',
          description:
            'Nowoczesne, responsywne witryny — od landingów po rozbudowane serwisy firmowe. React, TypeScript, dbałość o UX i konwersję.',
          icon: '🌐',
        },
        {
          title: 'Aplikacje webowe',
          description:
            'SPA/PWA: React, TypeScript, NestJS, .NET. Bezpieczne API, integracja frontend–backend, skalowalność.',
          icon: '⚙️',
        },
        {
          title: 'Aplikacje desktopowe',
          description:
            'Electron, .NET WPF — fakturowanie, praca offline, eksport PDF, lokalne bazy i integracje z API.',
          icon: '🖥️',
        },
        {
          title: 'Integracje API',
          description:
            'REST, płatności, CRM, Telegram Bot API, NBP i inne. Projektowanie kontraktów API i bezpieczeństwa.',
          icon: '🔗',
        },
        {
          title: 'Refaktoryzacja i modernizacja',
          description:
            'Porządkowanie kodu, migracje do TypeScript/React 18+/NestJS, poprawa wydajności i utrzymywalności.',
          icon: '🚀',
        },
        {
          title: 'Bazy danych i wdrożenia',
          description:
            'Modelowanie danych, MySQL, PostgreSQL, MongoDB. VPS, chmura (AWS, Azure, Vercel), Docker, CI/CD.',
          icon: '🗄️',
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Repozytoria, demo na żywo i projekty wybrane z GitHub.',
      viewRepo: 'Repozytorium',
      viewLive: 'Demo / Live',
      viewRepoBackend: 'Backend (NestJS)',
      viewRepoMobile: 'Mobile (Expo)',
    },
    contact: {
      title: 'Kontakt',
      lead: 'Masz projekt lub pytanie? Wyślij wiadomość — odpowiem tak szybko, jak to możliwe.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefon',
      locationLabel: 'Lokalizacja',
      linksLabel: 'Social',
    },
    form: {
      name: 'Imię i nazwisko',
      namePlaceholder: 'Jan Kowalski',
      email: 'E-mail',
      emailPlaceholder: 'jan@firma.pl',
      subject: 'Temat (opcjonalnie)',
      subjectPlaceholder: 'np. Współpraca przy API',
      message: 'Wiadomość',
      messagePlaceholder: 'Opisz krótko cel kontaktu, stack lub termin…',
      submit: 'Wyślij wiadomość',
      sending: 'Wysyłanie…',
      success: 'Wiadomość wysłana. Dziękuję — odezwę się wkrótce.',
      error: 'Nie udało się wysłać. Spróbuj ponownie lub napisz bezpośrednio na e-mail.',
      errors: {
        name: 'Podaj imię lub nazwę.',
        email: 'Podaj poprawny adres e-mail.',
        message: 'Wiadomość jest wymagana (min. kilka znaków).',
      },
      charCount: 'znaków',
      honeypotLabel: 'Nie wypełniaj tego pola',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      technologies: 'Technologies',
      portfolio: 'Portfolio',
      services: 'Services',
      contact: 'Contact',
    },
    brand: 'Dmytro Potapchuk',
    footer: { rights: 'All rights reserved.' },
    home: {
      badge: 'Full-Stack Developer | React / NestJS / .NET',
      title: 'Scalable web applications built for real business outcomes.',
      subtitle:
        'I design backend architecture, refactor legacy systems, and ship modern UIs. Stability, automated tests, and enterprise-grade delivery.',
      ctaContact: 'Send a message',
      ctaPortfolio: 'View portfolio',
      stats: [
        { label: 'Test coverage (production project)', value: '95%' },
        { label: 'Years of experience', value: '3+' },
        { label: 'Repos and projects', value: '20+' },
      ],
      aboutTitle: 'At a glance',
      aboutLead:
        'Full-Stack Developer and computer science engineer — backend (NestJS, Node.js, .NET), relational and NoSQL databases, AWS/Azure cloud, React and TypeScript on the frontend.',
      highlights: [
        'PayFlow (commercial): NestJS, MongoDB, PayU integration, Swagger, React Native + Expo, tests >95%',
        'Production rescue: modular architecture, PostgreSQL, automated testing',
        'REST APIs, Docker, CI/CD, monitoring (e.g. Prometheus)',
      ],
      experienceTitle: 'Experience',
      experienceCta: 'Full story — on the About page and below',
      experienceItems: [
        {
          role: 'Full-Stack Developer (PayFlow product)',
          company: 'Commercial payment product',
          period: '2025 — present',
          points: [
            'NestJS, TypeScript, MongoDB, JWT, REST, Swagger, PayU integration, currency and messaging services; Docker, CI/CD, Prometheus monitoring.',
            'Mobile app: React Native, Expo, TypeScript — test coverage >95% across backend and client.',
            'Sandbox demo: dom.payflow.waw.pl — repos: backend-pay-flow, PayFlow.',
          ],
        },
        {
          role: 'Full-Stack Developer',
          company: 'Oncology Volunteering',
          period: '2026 — present',
          points: [
            'Production stabilization, NestJS + PostgreSQL, modular architecture.',
            'Automated tests ~95% coverage.',
          ],
        },
        {
          role: 'Full-Stack Developer',
          company: 'Enigma Information Security Systems',
          period: '2024 — 2025',
          points: [
            'React, TypeScript, NestJS, Node.js, databases, AWS and Azure.',
            'SQL and platform performance tuning.',
          ],
        },
        {
          role: 'Full-Stack Developer (contract)',
          company: 'SolarGen',
          period: '2023 (6 mo.)',
          points: [
            'Migration from WordPress to dedicated backend.',
            'NestJS, MySQL, React components.',
          ],
        },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        'My name is Dmytro Potapchuk. I am a Full-Stack Developer with a degree in computer science. I deliver projects for individuals and companies, with a strong focus on backend and system architecture.',
        'I specialize in web and mobile applications (React Native, Expo), desktop apps, business process automation, and third-party integrations. I ship products such as PayFlow (payments, PayU, NestJS API with Swagger) and have experience with e-commerce (automotive parts), admin panels, and migrating logic from WordPress to a dedicated backend.',
        'Stack: React, TypeScript, NestJS, Node.js, .NET, Docker, AWS, and Azure. Databases: MySQL, PostgreSQL, MongoDB, SQL Server, SQLite. I build REST APIs, implement CI/CD, and optimize backends for scalability.',
        'I study at VIZJA University in Warsaw (IT). Languages: Ukrainian (native), Polish (C2), Russian (C1), English (B1).',
      ],
      githubCta: 'GitHub profile',
    },
    technologies: {
      title: 'Technologies',
      frontend: 'Frontend',
      backend: 'Backend & data',
      tools: 'Tools & DevOps',
    },
    services: {
      title: 'Services',
      items: [
        {
          title: 'Websites & landing pages',
          description:
            'Modern responsive sites — from landing pages to full corporate sites. React, TypeScript, UX and conversion focus.',
          icon: '🌐',
        },
        {
          title: 'Web applications',
          description:
            'SPA/PWA with React, TypeScript, NestJS, .NET. Secure APIs, full-stack integration, scalability.',
          icon: '⚙️',
        },
        {
          title: 'Desktop applications',
          description:
            'Electron, .NET WPF — invoicing, offline work, PDF export, local databases and API integrations.',
          icon: '🖥️',
        },
        {
          title: 'API integrations',
          description:
            'REST, payments, CRM, Telegram Bot API, NBP, and more. API contracts and security-minded design.',
          icon: '🔗',
        },
        {
          title: 'Refactoring & modernization',
          description:
            'Code cleanup, migrations to TypeScript/React 18+/NestJS, performance and maintainability improvements.',
          icon: '🚀',
        },
        {
          title: 'Databases & deployment',
          description:
            'Data modeling, MySQL, PostgreSQL, MongoDB. VPS, cloud (AWS, Azure, Vercel), Docker, CI/CD.',
          icon: '🗄️',
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Repositories, live demos, and selected GitHub projects.',
      viewRepo: 'Repository',
      viewLive: 'Live demo',
      viewRepoBackend: 'Backend (NestJS)',
      viewRepoMobile: 'Mobile (Expo)',
    },
    contact: {
      title: 'Contact',
      lead: 'Have a project or a question? Send a message — I will reply as soon as I can.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      linksLabel: 'Social',
    },
    form: {
      name: 'Full name',
      namePlaceholder: 'Jane Doe',
      email: 'Email',
      emailPlaceholder: 'jane@company.com',
      subject: 'Subject (optional)',
      subjectPlaceholder: 'e.g. API collaboration',
      message: 'Message',
      messagePlaceholder: 'Briefly describe the goal, stack, or timeline…',
      submit: 'Send message',
      sending: 'Sending…',
      success: 'Message sent. Thank you — I will get back to you soon.',
      error: 'Could not send. Please try again or email me directly.',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter a valid email address.',
        message: 'Message is required (at least a few characters).',
      },
      charCount: 'characters',
      honeypotLabel: 'Leave this field empty',
    },
  },
};

export type ProjectLinks = {
  /** pojedyncze repo (większość projektów) */
  github?: string;
  /** backend PayFlow itp. */
  githubBackend?: string;
  /** klient mobilny Expo / RN */
  githubMobile?: string;
  live?: string;
};

export type BilingualProject = {
  pl: { title: string; description: string };
  en: { title: string; description: string };
  links: ProjectLinks;
};

/** Pełna lista: wcześniejsze projekty + repozytoria Dmytro-Potapchuk + live demo */
export const portfolioProjects: BilingualProject[] = [
  {
    pl: {
      title: 'PayFlow — płatności i aplikacja mobilna',
      description:
        'Komercyjny produkt: backend NestJS (auth JWT, transakcje, PayU, kursy walut, messaging), MongoDB, REST + Swagger, testy >95%, Docker, GitHub Actions, Prometheus. Klient: React Native + Expo + TypeScript, testy jednostkowe i integracyjne. Demo sandbox (nie jest prawdziwym bankiem): logowanie i rejestracja.',
    },
    en: {
      title: 'PayFlow — payments & mobile app',
      description:
        'Commercial product: NestJS backend (JWT auth, transactions, PayU, FX rates, messaging), MongoDB, REST + Swagger, tests >95%, Docker, GitHub Actions, Prometheus. Client: React Native + Expo + TypeScript with strong test coverage. Sandbox demo (not a real bank): login and signup.',
    },
    links: {
      githubBackend: 'https://github.com/Dmytro-Potapchuk/backend-pay-flow',
      githubMobile: 'https://github.com/Dmytro-Potapchuk/PayFlow',
      live: 'https://dom.payflow.waw.pl/',
    },
  },
  {
    pl: {
      title: 'Wolontariat Onkologiczny',
      description:
        'Produkcja: stabilizacja kodu, NestJS, PostgreSQL, modularna architektura, testy automatyczne (~95% pokrycia).',
    },
    en: {
      title: 'Oncology Volunteering (production)',
      description:
        'Stabilized production codebase: NestJS, PostgreSQL, modular architecture, automated tests (~95% coverage).',
    },
    links: { live: 'https://wolontariatonkologiczny.org.pl' },
  },
  {
    pl: {
      title: 'CurrencyTransferAPI',
      description: 'API bankowe: transakcje, wymiana walut, JWT, TypeORM, Docker.',
    },
    en: {
      title: 'CurrencyTransferAPI',
      description: 'Banking-oriented REST API: transactions, currency exchange, JWT, TypeORM, Docker.',
    },
    links: { github: 'https://github.com/Dmytro-Potapchuk/CurrencyTransferAPI' },
  },
  {
    pl: {
      title: 'Shop Parts (e-commerce)',
      description: 'Sklep z częściami: React, Node.js, MongoDB, filtrowanie, koszyk, integracja API.',
    },
    en: {
      title: 'Shop Parts (e-commerce)',
      description: 'Automotive parts store: React, Node.js, MongoDB, filtering, cart, API integration.',
    },
    links: { github: 'https://github.com/Dmytro-Potapchuk/shop-parts' },
  },
  {
    pl: {
      title: 'partsShop',
      description: 'Alternatywna wersja / sklep części (TypeScript) — architektura frontendu i integracja z backendem.',
    },
    en: {
      title: 'partsShop',
      description: 'Alternative parts-shop variant (TypeScript) — frontend architecture and backend integration.',
    },
    links: { github: 'https://github.com/Dmytro-Potapchuk/partsShop' },
  },
  {
    pl: {
      title: 'portfolio-site',
      description: 'Strona portfolio (ten projekt) — React, TypeScript, nowoczesny UI i i18n.',
    },
    en: {
      title: 'portfolio-site',
      description: 'Portfolio site (this project) — React, TypeScript, modern UI and i18n.',
    },
    links: { github: 'https://github.com/Dmytro-Potapchuk/portfolio-site' },
  },
  {
    pl: {
      title: 'sofia-art-site',
      description: 'Witryna artystyczna — TypeScript, responsywny layout.',
    },
    en: {
      title: 'sofia-art-site',
      description: 'Art showcase site — TypeScript, responsive layout.',
    },
    links: { github: 'https://github.com/Dmytro-Potapchuk/sofia-art-site' },
  },
  {
    pl: {
      title: 'cine-synth',
      description: 'Aplikacja filmowa — React, TypeScript, listy i stylizacja UI.',
    },
    en: {
      title: 'cine-synth',
      description: 'Movie browsing app — React, TypeScript, lists and UI styling.',
    },
    links: { github: 'https://github.com/Dmytro-Potapchuk/cine-synth' },
  },
  {
    pl: {
      title: 'solar-gen',
      description: 'Projekt SolarGen — JavaScript, logika frontowa i integracje.',
    },
    en: {
      title: 'solar-gen',
      description: 'SolarGen project — JavaScript, front-end logic and integrations.',
    },
    links: { github: 'https://github.com/Dmytro-Potapchuk/solar-gen' },
  },
  {
    pl: {
      title: 'Sklep z częściami (legacy repo)',
      description: 'Wczesniejsze repozytorium sklepu — NestJS, React, TypeScript, MySQL.',
    },
    en: {
      title: 'Auto parts shop (legacy repo)',
      description: 'Earlier shop repository — NestJS, React, TypeScript, MySQL.',
    },
    links: { github: 'https://github.com/Keyn1991/shop-parts' },
  },
  {
    pl: {
      title: 'Aplikacja bankowa (legacy)',
      description: 'Starsze repo API bankowego — .NET Core, React, MySQL.',
    },
    en: {
      title: 'Banking app (legacy repo)',
      description: 'Earlier banking API repo — .NET Core, React, MySQL.',
    },
    links: { github: 'https://github.com/Keyn1991/CurrencyTransferAPI' },
  },
  {
    pl: {
      title: 'Desktop — faktury (WPF)',
      description: 'Aplikacja WPF: PDF, klienci, archiwum dokumentów.',
    },
    en: {
      title: 'Desktop invoicing (WPF)',
      description: 'WPF app: PDF invoices, clients, document archive.',
    },
    links: { github: 'https://github.com/Keyn1991/invoice-desktop' },
  },
  {
    pl: {
      title: 'Movie App 2023',
      description: 'SPA filmowa z zewnętrznym API — React, filtrowanie.',
    },
    en: {
      title: 'Movie App 2023',
      description: 'Movie SPA with external API — React, filtering.',
    },
    links: {
      github: 'https://github.com/Keyn1991/app-movie-react-2023',
      live: 'https://keyn1991.github.io/app-movie-react-2023/',
    },
  },
  {
    pl: {
      title: 'Cine Synth for Redux',
      description: 'Wersja z Redux Toolkit — zarządzanie stanem.',
    },
    en: {
      title: 'Cine Synth for Redux',
      description: 'Redux Toolkit version — global state management.',
    },
    links: { github: 'https://github.com/Keyn1991/cine-synth-for-redux' },
  },
  {
    pl: {
      title: 'Telegram Bot Interface',
      description: 'Panel React + TypeScript do zarządzania użytkownikami bota.',
    },
    en: {
      title: 'Telegram Bot Interface',
      description: 'React + TypeScript admin panel for Telegram bot users.',
    },
    links: { github: 'https://github.com/Keyn1991/telegram-bot-ui' },
  },
  {
    pl: {
      title: 'Solargen.pl — backend',
      description: 'Ankieta i logika dla klienta — NestJS, integracja z frontem.',
    },
    en: {
      title: 'Solargen.pl — backend',
      description: 'Survey and business logic — NestJS, front-end integration.',
    },
    links: { github: 'https://github.com/Keyn1991/solar-gen-backend' },
  },
  {
    pl: {
      title: 'Final Project — frontend',
      description: 'Platforma edukacyjna — React, TypeScript, Bootstrap.',
    },
    en: {
      title: 'Final Project — frontend',
      description: 'Educational platform UI — React, TypeScript, Bootstrap.',
    },
    links: { github: 'https://github.com/Keyn1991/okten-final-project-interface' },
  },
  {
    pl: {
      title: 'Final Project — backend',
      description: 'NestJS, MongoDB, role, walidacja.',
    },
    en: {
      title: 'Final Project — backend',
      description: 'NestJS, MongoDB, roles, validation.',
    },
    links: { github: 'https://github.com/Keyn1991/okten-final-project-backend-nestjs' },
  },
  {
    pl: {
      title: 'AEH Proekt',
      description: 'Projekt akademicki w Javie — moduły i SQLite.',
    },
    en: {
      title: 'AEH Proekt',
      description: 'Academic Java project — modules and SQLite.',
    },
    links: { github: 'https://github.com/Keyn1991/AEH_Proekt' },
  },
  {
    pl: {
      title: 'DareDrop Spotlight Program',
      description: 'Integracja z DareDrop dla streamerów — React, API.',
    },
    en: {
      title: 'DareDrop Spotlight Program',
      description: 'DareDrop integration for streamers — React, API.',
    },
    links: { github: 'https://github.com/Keyn1991/dare-drop-streame-spotlight-program' },
  },
];
