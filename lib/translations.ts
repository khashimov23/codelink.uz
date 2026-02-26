export type Locale = "en" | "uz";

export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      process: "Process",
      portfolio: "Portfolio",
      tech: "Tech",
      testimonials: "Testimonials",
      contact: "Contact Us",
    },
    hero: {
      badge: "SOFTWARE DEVELOPMENT COMPANY",
      title1: "Where vision",
      title2: "becomes",
      titleAccent: "product",
      description:
        "We build world-class mobile apps, web platforms, and backend systems for ambitious companies. Based in Uzbekistan, delivering globally.",
      cta1: "Start a Project",
      cta2: "View Our Work",
      scroll: "SCROLL",
    },
    services: {
      tag: "SERVICES",
      title: "What we build",
      subtitle:
        "End-to-end digital product development — from strategy to launch and beyond.",
      items: [
        {
          title: "Native iOS & Android",
          description:
            "High-performance native apps built with Swift and Kotlin. Pixel-perfect UI, smooth animations, and rock-solid stability.",
        },
        {
          title: "Web Development",
          description:
            "Modern web applications using Next.js, React, and TypeScript. Fast, accessible, and optimized for conversion.",
        },
        {
          title: "Backend Architecture",
          description:
            "Scalable backend systems with Node.js, Go, and PostgreSQL. Microservices, APIs, and real-time infrastructure.",
        },
        {
          title: "UI/UX Design",
          description:
            "Research-driven design that converts. Wireframes, prototypes, and design systems that users love.",
        },
        {
          title: "DevOps & Cloud",
          description:
            "CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure on AWS and GCP. Zero-downtime deployments.",
        },
        {
          title: "Product Strategy",
          description:
            "From idea validation to market fit. We help you define scope, prioritize features, and ship what matters.",
        },
      ],
    },
    whyUs: {
      tag: "WHY CODELINK",
      title: "Results that speak",
      subtitle:
        "We don't just write code. We build products that move metrics and earn trust.",
      stats: [
        { label: "Projects Delivered" },
        { label: "Client Satisfaction" },
        { label: "Team Members" },
        { label: "Years of Experience" },
      ],
      features: [
        {
          title: "Ship Fast",
          description:
            "Agile sprints, weekly demos, and rapid iteration. We move at startup speed with enterprise quality.",
        },
        {
          title: "Built to Last",
          description:
            "Clean architecture, comprehensive testing, and scalable infrastructure. No tech debt shortcuts.",
        },
        {
          title: "Dedicated Team",
          description:
            "You get a focused team — not shared resources. Direct Slack access, daily standups, full transparency.",
        },
        {
          title: "True Partnership",
          description:
            "We challenge assumptions, suggest improvements, and care about your product as if it were our own.",
        },
      ],
    },
    process: {
      tag: "PROCESS",
      title: "How we work",
      subtitle:
        "A proven process refined across dozens of projects. No surprises, just steady progress.",
      steps: [
        {
          title: "Discovery",
          description:
            "We dig deep into your goals, users, and market. No assumptions — just data-driven clarity.",
        },
        {
          title: "Design",
          description:
            "Wireframes, prototypes, and UI design validated with real user feedback before a single line of code.",
        },
        {
          title: "Development",
          description:
            "Agile sprints with weekly demos. Clean code, thorough reviews, and transparent progress tracking.",
        },
        {
          title: "Testing & QA",
          description:
            "Automated tests, manual QA, performance audits, and security checks. We ship with confidence.",
        },
        {
          title: "Launch & Scale",
          description:
            "Smooth deployment, monitoring, and ongoing optimization. We stay with you post-launch.",
        },
      ],
    },
    portfolio: {
      tag: "PORTFOLIO",
      title: "Selected work",
      subtitle: "Real products we've built for ambitious companies.",
      projects: [
        {
          category: "Full-Stack Platform",
          description:
            "Complete delivery platform — web, iOS, Android, and admin dashboard. Built for scale and speed.",
        },
        {
          category: "Mobile Banking",
          description:
            "Secure mobile banking application with biometric auth, real-time transactions, and analytics dashboard.",
        },
        {
          category: "Web Application",
          description:
            "Corporate management system with role-based access, reporting, and real-time collaboration features.",
        },
      ],
    },
    tech: {
      tag: "TECHNOLOGY",
      title: "Our tech stack",
      subtitle: "We pick the right tool for the job. Here's what we work with daily.",
    },
    testimonials: {
      tag: "TESTIMONIALS",
      title: "Trusted by builders",
      items: [
        {
          quote:
            "Codelink delivered our entire platform — web, iOS, Android, and admin dashboard — on time and with exceptional quality. They're our go-to team.",
        },
        {
          quote:
            "Professional communication, clean code, and they actually understand product thinking. Rare combination in this market.",
        },
        {
          quote:
            "We needed a team that could move fast without cutting corners. Codelink exceeded every expectation we had.",
        },
      ],
    },
    cta: {
      tag: "READY TO BUILD?",
      title1: "Let's turn your idea",
      title2: "into a",
      titleAccent: "product",
      subtitle:
        "Tell us about your project. We'll respond within 24 hours with a clear plan and honest estimate.",
      cta1: "Start a Conversation",
      cta2: "Send an Email",
      note: "No commitment required. Free initial consultation.",
    },
    footer: {
      description:
        "Software development company based in Uzbekistan. Building digital products for ambitious teams worldwide.",
      nav: {
        services: "Services",
        about: "About",
        process: "Process",
        portfolio: "Portfolio",
        contact: "Contact",
      },
      rights: "All rights reserved.",
      location: "Tashkent, Uzbekistan",
    },
  },

  uz: {
    nav: {
      services: "Xizmatlar",
      about: "Biz haqimizda",
      process: "Jarayon",
      portfolio: "Portfolio",
      tech: "Texnologiyalar",
      testimonials: "Mijozlar",
      contact: "Bog'lanish",
    },
    hero: {
      badge: "DASTURIY TA'MINOT KOMPANIYASI",
      title1: "G'oyangiz",
      title2: "mahsulotga",
      titleAccent: "aylanadi",
      description:
        "Biz yirik kompaniyalar uchun dunyo darajasidagi mobil ilovalar, veb-platformalar va backend tizimlarini yaratamiz. O'zbekistondamiz, global yetkazib beramiz.",
      cta1: "Loyiha Boshlash",
      cta2: "Ishlarimizni Ko'rish",
      scroll: "PASTGA",
    },
    services: {
      tag: "XIZMATLAR",
      title: "Nima yaratamiz",
      subtitle:
        "Strategiyadan tortib ishga tushirishgacha — to'liq raqamli mahsulot ishlanmasi.",
      items: [
        {
          title: "Native iOS va Android",
          description:
            "Swift va Kotlin yordamida yuqori unumdorlikli native ilovalar. Mukammal UI, silliq animatsiyalar va barqarorlik.",
        },
        {
          title: "Veb Dasturlash",
          description:
            "Next.js, React va TypeScript asosidagi zamonaviy veb-ilovalar. Tez, qulay va konversiyaga optimallashtirilgan.",
        },
        {
          title: "Backend Arxitektura",
          description:
            "Node.js, Go va PostgreSQL bilan kengayadigan backend tizimlari. Mikroservislar, API-lar va real-vaqt infratuzilmasi.",
        },
        {
          title: "UI/UX Dizayn",
          description:
            "Tadqiqotga asoslangan konvertatsiya qiladigan dizayn. Foydalanuvchilar yoqtiradigan vayerfremlar, prototiplar va dizayn tizimlari.",
        },
        {
          title: "DevOps va Cloud",
          description:
            "CI/CD quvurlari, Docker, Kubernetes va AWS/GCP bulutli infratuzilma. Uzilishsiz joylashtirish.",
        },
        {
          title: "Mahsulot Strategiyasi",
          description:
            "G'oyani tekshirishdan bozor muvofiqligigacha. Qamrovni belgilash, xususiyatlarni ustuvorlash va asosiyni yetkazishda yordam.",
        },
      ],
    },
    whyUs: {
      tag: "NIMA UCHUN CODELINK",
      title: "Natijalar o'zi gapiradi",
      subtitle:
        "Biz shunchaki kod yozmaymiz. Ko'rsatkichlarni yaxshilaydigan va ishonch qozongan mahsulotlar yaratamiz.",
      stats: [
        { label: "Topshirilgan Loyihalar" },
        { label: "Mijoz Qoniqishi" },
        { label: "Jamoa A'zolari" },
        { label: "Tajriba Yillari" },
      ],
      features: [
        {
          title: "Tez Yetkazib Berish",
          description:
            "Agile sprintlar, haftalik demolar va tezkor iteratsiya. Startup tezligida, enterprise sifatida.",
        },
        {
          title: "Uzoq Muddatli",
          description:
            "Toza arxitektura, to'liq testlash va kengayadigan infratuzilma. Texnik qarzga yo'l qo'ymaymiz.",
        },
        {
          title: "Bag'ishlangan Jamoa",
          description:
            "Siz umumiy resurslar emas, alohida jamoa olasiz. To'g'ridan-to'g'ri muloqot, kunlik standaplar, to'liq shaffoflik.",
        },
        {
          title: "Haqiqiy Hamkorlik",
          description:
            "Biz taxminlarni shubha ostiga qo'yamiz, yaxshilanishlarni taklif qilamiz va mahsulotingizni o'zimizniki kabi qadrlaymiz.",
        },
      ],
    },
    process: {
      tag: "JARAYON",
      title: "Qanday ishlaymiz",
      subtitle:
        "O'nlab loyihalarda sinovdan o'tgan jarayon. Kutilmagan hodisalar yo'q, faqat barqaror rivojlanish.",
      steps: [
        {
          title: "Kashfiyot",
          description:
            "Maqsadlaringiz, foydalanuvchilaringiz va bozoringizni chuqur o'rganamiz. Taxminlarsiz — faqat ma'lumotga asoslangan aniqlik.",
        },
        {
          title: "Dizayn",
          description:
            "Bitta kod satri yozilmasdan oldin real foydalanuvchi fikri bilan tasdiqlangan vayerfremlar, prototiplar va UI dizayn.",
        },
        {
          title: "Ishlab Chiqish",
          description:
            "Haftalik demolar bilan agile sprintlar. Toza kod, puxta ko'rib chiqish va shaffof jarayon nazorati.",
        },
        {
          title: "Test va QA",
          description:
            "Avtomatlashtirilgan testlar, qo'lda QA, unumdorlik auditi va xavfsizlik tekshiruvlari. Ishonch bilan yetkazamiz.",
        },
        {
          title: "Ishga Tushirish va Kengaytirish",
          description:
            "Silliq joylashtirish, monitoring va doimiy optimallashtirish. Ishga tushirishdan keyin ham yoningizda bo'lamiz.",
        },
      ],
    },
    portfolio: {
      tag: "PORTFOLIO",
      title: "Tanlangan ishlar",
      subtitle: "Yetakchi kompaniyalar uchun yaratgan haqiqiy mahsulotlar.",
      projects: [
        {
          category: "To'liq Yechim",
          description:
            "To'liq yetkazib berish platformasi — veb, iOS, Android va admin panel. Masshtab va tezlik uchun yaratilgan.",
        },
        {
          category: "Mobil Banking",
          description:
            "Biometrik autentifikatsiya, real vaqt tranzaksiyalari va analitika paneli bilan xavfsiz mobil banking ilovasi.",
        },
        {
          category: "Veb Ilova",
          description:
            "Rol asosidagi kirish, hisobot va real vaqt hamkorlik funksiyalari bilan korporativ boshqaruv tizimi.",
        },
      ],
    },
    tech: {
      tag: "TEXNOLOGIYALAR",
      title: "Texnologiyalar to'plami",
      subtitle: "Har bir vazifa uchun to'g'ri vositani tanlaymiz. Kundalik ishlatadigan texnologiyalarimiz.",
    },
    testimonials: {
      tag: "MIJOZLAR FIKRI",
      title: "Quriluvchilar ishonadi",
      items: [
        {
          quote:
            "Codelink butun platformamizni — veb, iOS, Android va admin panelni — o'z vaqtida va a'lo sifatda yetkazib berdi. Ular bizning asosiy jamoamiz.",
        },
        {
          quote:
            "Professional muloqot, toza kod va ular haqiqatan ham mahsulot tafakkurini tushunadilar. Bu bozorda kamdan-kam uchraydigan kombinatsiya.",
        },
        {
          quote:
            "Bizga tez harakat qila oladigan, lekin sifatdan murosa qilmaydigan jamoa kerak edi. Codelink har qanday kutganimizdan oshib ketdi.",
        },
      ],
    },
    cta: {
      tag: "QURISHGA TAYYORMISIZ?",
      title1: "G'oyangizni",
      title2: "mahsulotga",
      titleAccent: "aylantiraylik",
      subtitle:
        "Loyihangiz haqida ayting. Aniq reja va halol narx bilan 24 soat ichida javob beramiz.",
      cta1: "Muloqot Boshlash",
      cta2: "Email Yuborish",
      note: "Majburiyat yo'q. Bepul dastlabki maslahat.",
    },
    footer: {
      description:
        "O'zbekistonda joylashgan dasturiy ta'minot kompaniyasi. Dunyo bo'ylab yetakchi jamoalar uchun raqamli mahsulotlar yaratamiz.",
      nav: {
        services: "Xizmatlar",
        about: "Biz haqimizda",
        process: "Jarayon",
        portfolio: "Portfolio",
        contact: "Bog'lanish",
      },
      rights: "Barcha huquqlar himoyalangan.",
      location: "Toshkent, O'zbekiston",
    },
  },
};

export type Translations = typeof translations.en;
