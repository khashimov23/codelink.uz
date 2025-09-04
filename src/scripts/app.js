document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const nav = document.getElementById('siteNav');
    const menuBtn = document.getElementById('menuBtn');
    const sendBtn = document.getElementById('sendBtn');
    const themeBtn = document.getElementById('themeBtn');
    const langSwitcher = document.getElementById('langSwitcher');
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    const navLinks = Array.from(document.querySelectorAll('header nav a[href^="#"]'));
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const toastEl = document.getElementById('toast');

    /* ---------------- Fade-in on scroll ---------------- */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });

    /* ---------------- Mobile menu toggle ---------------- */
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            menuBtn.setAttribute('aria-expanded', String(open));
        });
        nav.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', () => {
                if (nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    menuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    let currentLang = localStorage.getItem('site.lang') || 'en';

    const translations = {
        en: {
            'site.title': 'Codelink.uz - IT Company',
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.portfolio': 'Portfolio',
            'nav.team': 'Team',
            'nav.contact': 'Contact',
            'hero.title': 'Welcome to Codelink.uz',
            'hero.subtitle': 'Where vision becomes product.',
            'hero.cta': 'Get in Touch',
            'about.title': 'About Us',
            'about.text': 'We build digital products that are fast, scalable, and loved by users. Our team has worked on many projects across different industries. Today, we bring that experience, creativity, and technical depth to every new challenge.',
            'about.highlight1.title': 'Expert Team',
            'about.highlight1.text': 'Skilled developers and designers dedicated to quality.',
            'about.highlight2.title': 'Modern Stack',
            'about.highlight2.text': 'We build products with the latest technologies.',
            'about.highlight3.title': 'Client Focused',
            'about.highlight3.text': 'Your vision guides every step of our process.',
            'services.title': 'Our Services',
            'services.mobile.title': 'Mobile App Development',
            'services.mobile.text': 'iOS, Android, and cross-platform apps that are fast, stable, and loved by users.',
            'services.web.title': 'Web Development',
            'services.web.text': 'Landing pages, portals, and dashboards that look great and perform smoothly.',
            'services.uiux.title': 'UI/UX Design',
            'services.uiux.text': 'User-friendly, modern, and brand-driven designs that keep users engaged.',
            'services.integrations.title': 'Custom Integrations',
            'services.integrations.text': 'APIs, payment systems, and telecom services tailored to your business needs.',
            'services.support.title': 'Ongoing Support',
            'services.support.text': 'Monitoring, maintenance, and scaling to keep your product growing.',
            'portfolio.title': 'Our Projects',
            'portfolio.item1.title': 'Joymee.uz',
            'portfolio.item2.title': 'Mobile Banking App',
            'portfolio.item3.title': 'Corporate Website',
            'team.title': 'Meet Our Team',
            'team.member1.role': 'CEO & iOS Developer',
            'team.member2.role': 'Android Developer',
            'team.member3.role': 'Frontend Developer',
            'team.member4.role': 'Backend Developer',
            'team.member5.role': 'UI/UX Designer',
            'testimonials.title': 'What Our Clients Say',
            'testimonials.item1.text': '"Codelink.uz delivered our app on time and exceeded expectations!"',
            'testimonials.item1.author': '- Bank Client',
            'testimonials.item2.text': '"Professional team, great communication, and top-notch results."',
            'testimonials.item2.author': '- Startup Founder',
            'testimonials.item3.text': '"Joymee is thrilled with the complete delivery — web, iOS, Android, and an admin dashboard. Fast to ship, reliable in production."',
            'testimonials.item3.author': '- Joymee.uz Team',
            'contact.title': 'Contact Us',
            'contact.form.name': 'Name:',
            'contact.form.phone': 'Phone:',
            'contact.form.message': 'Message:',
            'contact.form.button': 'Send',
            'contact.info.emailLabel': 'Email:',
            'contact.info.phoneLabel': 'Phone:',
            'form.success.sent': 'Thanks! Your message was sent.',
            'form.success.mailto': 'Thank you! Opening your email app…',
            'form.error.messageRequired': 'Please enter a message before sending.',
            'form.error.server': 'Could not send via server. Copied message to clipboard.',
            'footer.text': '© 2025 Codelink.uz. All rights reserved.',
            'roadmap.title': 'Roadmap',
            'roadmap.step1.title': 'Get Started',
            'roadmap.step1.desc': 'We clarify goals, scope, and success metrics together.',
            'roadmap.step2.title': 'Design & Architecture',
            'roadmap.step2.desc': 'UI/UX and system design that balances speed and scale.',
            'roadmap.step3.title': 'Development',
            'roadmap.step3.desc': 'Fast iterations with modern stack, clear milestones.',
            'roadmap.step4.title': 'Testing & QA',
            'roadmap.step4.desc': 'Automated and manual checks for quality and security.',
            'roadmap.step5.title': 'Launch & Support',
            'roadmap.step5.desc': 'Release, monitor, and improve with ongoing support.'
        },
        ru: {
            'site.title': 'Codelink.uz - IT компания',
            'nav.home': 'Главная',
            'nav.about': 'О нас',
            'nav.services': 'Услуги',
            'nav.portfolio': 'Портфолио',
            'nav.team': 'Команда',
            'nav.contact': 'Контакты',
            'hero.title': 'Добро пожаловать в Codelink.uz',
            'hero.subtitle': 'Где видение становится продуктом.',
            'hero.cta': 'Связаться с нами',
            'about.title': 'О нас',
            'about.text': 'Мы создаём цифровые продукты, которые работают быстро, легко масштабируются и нравятся пользователям. Наша команда реализовала множество проектов в разных сферах. Сегодня мы переносим этот опыт, креативность и техническую экспертизу в каждый новый вызов.',
            'about.highlight1.title': 'Экспертная команда',
            'about.highlight1.text': 'Опытные разработчики и дизайнеры, ориентированные на качество.',
            'about.highlight2.title': 'Современный стек',
            'about.highlight2.text': 'Мы создаем продукты на основе новейших технологий.',
            'about.highlight3.title': 'Ориентация на клиента',
            'about.highlight3.text': 'Ваше видение направляет каждый шаг нашего процесса.',
            'services.title': 'Наши услуги',
            'services.mobile.title': 'Мобильная разработка',
            'services.mobile.text': 'Приложения для iOS, Android и кроссплатформенные решения: быстрые, стабильные и удобные для пользователей.',
            'services.web.title': 'Веб-разработка',
            'services.web.text': 'Лендинги, порталы и дашборды, которые отлично выглядят и работают без сбоев.',
            'services.uiux.title': 'UI/UX дизайн',
            'services.uiux.text': 'Удобные, современные и бренд-ориентированные интерфейсы, которые удерживают пользователей.',
            'services.integrations.title': 'Индивидуальные интеграции',
            'services.integrations.text': 'API, платёжные системы и телеком-сервисы под задачи вашего бизнеса.',
            'services.support.title': 'Поддержка и развитие',
            'services.support.text': 'Мониторинг, обслуживание и масштабирование для постоянного роста продукта.',
            'portfolio.title': 'Наши проекты',
            'portfolio.item1.title': 'Joymee.uz',
            'portfolio.item2.title': 'Мобильное банковское приложение',
            'portfolio.item3.title': 'Корпоративный сайт',
            'team.title': 'Наша команда',
            'team.member1.role': 'Генеральный директор и iOS-разработчик',
            'team.member2.role': 'Android-разработчик',
            'team.member3.role': 'Frontend-разработчик',
            'team.member4.role': 'Backend-разработчик',
            'team.member5.role': 'UI/UX дизайнер',
            'testimonials.title': 'Отзывы клиентов',
            'testimonials.item1.text': '"Codelink.uz доставили наше приложение вовремя и превзошли ожидания!"',
            'testimonials.item1.author': '- Клиент банка',
            'testimonials.item2.text': '"Профессиональная команда, отличная коммуникация и первоклассный результат."',
            'testimonials.item2.author': '- Основатель стартапа',
            'testimonials.item3.text': '"Joymee очень довольны: веб, iOS, Android и админ-панель. Быстрый релиз и надежная работа."',
            'testimonials.item3.author': '- Команда Joymee.uz',
            'contact.title': 'Свяжитесь с нами',
            'contact.form.name': 'Имя:',
            'contact.form.phone': 'Телефон:',
            'contact.form.message': 'Сообщение:',
            'contact.form.button': 'Отправить',
            'contact.info.emailLabel': 'Email:',
            'contact.info.phoneLabel': 'Телефон:',
            'form.success.sent': 'Спасибо! Ваше сообщение отправлено.',
            'form.success.mailto': 'Спасибо! Открываем ваше почтовое приложение…',
            'form.error.messageRequired': 'Пожалуйста, введите сообщение перед отправкой.',
            'form.error.server': 'Не удалось отправить через сервер. Сообщение скопировано в буфер.',
            'footer.text': '© 2025 Codelink.uz. Все права защищены.',
            'roadmap.title': 'Roadmap',
            'roadmap.step1.title': 'Начать работу',
            'roadmap.step1.desc': 'Вместе определим цели и уточним направление проекта.',
            'roadmap.step2.title': 'Дизайн и структура системы',
            'roadmap.step2.desc': 'Создаём удобные для пользователей и быстрые для бизнеса решения.',
            'roadmap.step3.title': 'Создание продукта',
            'roadmap.step3.desc': 'Работаем поэтапно, быстро и на современной технологической базе.',
            'roadmap.step4.title': 'Тестирование и качество',
            'roadmap.step4.desc': 'Автоматические и ручные проверки для качества и безопасности.',
            'roadmap.step5.title': 'Запуск и поддержка',
            'roadmap.step5.desc': 'Запускаем проект, контролируем и обеспечиваем постоянную поддержку.',
        },
        uz: {
            'site.title': 'Codelink.uz - IT kompaniya',
            'nav.home': 'Bosh sahifa',
            'nav.about': 'Biz haqimizda',
            'nav.services': 'Xizmatlar',
            'nav.portfolio': 'Loyihalar',
            'nav.team': 'Jamoa',
            'nav.contact': 'Aloqa',
            'hero.title': 'Codelink.uz ga xush kelibsiz',
            'hero.subtitle': 'G‘oya mahsulotga aylanadigan joy.',
            'hero.cta': 'Bog‘lanish',
            'about.title': 'Biz haqimizda',
            'about.text': 'Biz tezkor, kengayadigan va foydalanuvchilarni o‘ziga rom etadigan raqamli mahsulotlar yaratamiz. Bizning jamoamiz turli sohalarda ko‘plab loyihalarni amalga oshirgan. Endi esa shu tajriba, ijodkorlik va texnik bilimni har bir yangi loyihaga olib kiramiz.',
            'about.highlight1.title': 'Mutaxassis jamoa',
            'about.highlight1.text': 'Sifatga sodiq malakali dasturchilar va dizaynerlar.',
            'about.highlight2.title': 'Zamonaviy stek',
            'about.highlight2.text': 'Biz mahsulotlarni so‘nggi texnologiyalar asosida quramiz.',
            'about.highlight3.title': 'Mijozga yo‘naltirilgan',
            'about.highlight3.text': 'Sizning g‘oyangiz jarayonimizning har bir bosqichini boshqaradi.',
            'services.title': 'Bizning xizmatlar',
            'services.mobile.title': 'Mobil ilovalar ishlab chiqish',
            'services.mobile.text': 'iOS, Android va kross‑platforma ilovalari: tezkor, barqaror va foydalanuvchilarga yoqimli.',
            'services.web.title': 'Veb‑dasturlash',
            'services.web.text': 'Landinglar, portallar va boshqaruv panellari: chiroyli dizayn va ravon ishlash.',
            'services.uiux.title': 'UI/UX dizayn',
            'services.uiux.text': 'Foydalanuvchiga qulay, zamonaviy va brendga mos dizaynlar — foydalanuvchini uzoqroq ushlab qoladi.',
            'services.integrations.title': 'Maxsus integratsiyalar',
            'services.integrations.text': 'API, to‘lov tizimlari va telekom xizmatlarini biznesingiz ehtiyojiga moslashtiramiz.',
            'services.support.title': 'Doimiy qo‘llab‑quvvatlash',
            'services.support.text': 'Monitoring, xizmat ko‘rsatish va kengaytirish orqali mahsulotni rivojlantirib boramiz.',
            'portfolio.title': 'Bizning loyihalar',
            'portfolio.item1.title': 'Joymee.uz',
            'portfolio.item2.title': 'Mobil banking ilovasi',
            'portfolio.item3.title': 'Korporativ web-sayt',
            'team.title': 'Jamoamiz',
            'team.member1.role': 'CEO va iOS dasturchi',
            'team.member2.role': 'Android dasturchi',
            'team.member3.role': 'Frontend dasturchi',
            'team.member4.role': 'Backend dasturchi',
            'team.member5.role': 'UI/UX dizayner',
            'testimonials.title': 'Mijozlarimiz fikri',
            'testimonials.item1.text': '"Codelink.uz ilovamizni o‘z vaqtida yetkazdi va kutilganidan ham yaxshi natija ko‘rsatdi, katta raxmat!"',
            'testimonials.item1.author': '- Bank mijozi',
            'testimonials.item2.text': '"Professional jamoa, a’lo aloqa va yuqori natijalar."',
            'testimonials.item2.author': '- Startap asoschisi',
            'testimonials.item3.text': '"Joymee juda mamnun — web, iOS, Android va admin panel to‘liq yetkazildi. Tez, ishonchli va masshtablanadigan yechim."',
            'testimonials.item3.author': '- Joymee.uz jamoasi',
            'contact.title': 'Biz bilan bog‘laning',
            'contact.form.name': 'Ism:',
            'contact.form.phone': 'Telefon:',
            'contact.form.message': 'Xabar:',
            'contact.form.button': 'Yuborish',
            'contact.info.emailLabel': 'Email:',
            'contact.info.phoneLabel': 'Telefon:',
            'form.success.sent': 'Rahmat! Xabaringiz yuborildi.',
            'form.success.mailto': 'Rahmat! Pochta ilovangiz ochilmoqda…',
            'form.error.messageRequired': 'Yuborishdan oldin xabar kiriting.',
            'form.error.server': 'Server orqali yuborib bo‘lmadi. Xabar buferga nusxalandi.',
            'footer.text': '© 2025 Codelink.uz. Barcha huquqlar himoyalangan.',
            'roadmap.title': 'Roadmap',
            'roadmap.step1.title': 'Ishni boshlash',
            'roadmap.step1.desc': 'Birgalikda maqsadlarni belgilab, loyihaning yo‘nalishi aniqlashtirib olamiz.',
            'roadmap.step2.title': 'Dizayn va tizim tuzilishi',
            'roadmap.step2.desc': 'Foydalanuvchilar uchun qulay, biznes uchun esa tezkor yechimlarni loyihalaymiz.',
            'roadmap.step3.title': 'Mahsulotni yaratish',
            'roadmap.step3.desc': 'Har bir bosqichni belgilab, zamonaviy stack yordamida tezkor ishlaymiz.',
            'roadmap.step4.title': 'Sinov va sifat nazorati',
            'roadmap.step4.desc': 'Sifat va xavfsizlikni ta’minlash uchun avtomatlashtirilgan tekshiruvlar.',
            'roadmap.step5.title': 'Ishga tushirish va qo‘llab-quvvatlash',
            'roadmap.step5.desc': 'Loyihani ishga tushiramiz, nazorat qilamiz va muntazam qo‘llab-quvvatlaymiz.'
        }
    };

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.title = translations[lang]['site.title'];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const text = translations[lang][key];
            if (text) el.textContent = text;
        });
        try { localStorage.setItem('site.lang', lang); } catch (e) {}
        const label = document.querySelector('.lang-label');
        if (label) label.textContent = (lang || 'en').toUpperCase();
        if (langMenu) {
            langMenu.querySelectorAll('[role="option"]').forEach(item => {
                item.setAttribute('aria-selected', item.getAttribute('data-lang') === lang ? 'true' : 'false');
            });
        }
    }

    // Language dropdown
    function closeLangMenu() {
        langSwitcher?.classList.remove('open');
        langBtn?.setAttribute('aria-expanded', 'false');
    }
    if (langBtn && langMenu) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = langSwitcher.classList.toggle('open');
            langBtn.setAttribute('aria-expanded', String(isOpen));
        });
        langMenu.addEventListener('click', (e) => {
            const li = e.target.closest('[data-lang]');
            if (!li) return;
            setLanguage(li.getAttribute('data-lang'));
            closeLangMenu();
        });
        document.addEventListener('click', () => closeLangMenu());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLangMenu();
        });
    }
    setLanguage(currentLang);

    /* ---------------- Theme toggle ---------------- */
    let currentTheme = localStorage.getItem('site.theme') || 'dark';
    applyTheme(currentTheme);

    themeBtn?.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
        try { localStorage.setItem('site.theme', currentTheme); } catch (e) {}
        showToast(`Theme: ${currentTheme === 'dark' ? 'Dark' : 'Light'}`);
    });

    function applyTheme(theme) {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('theme-dark');
            if (themeBtn) themeBtn.textContent = '☀️';
        } else {
            root.classList.remove('theme-dark');
            if (themeBtn) themeBtn.textContent = '🌙';
        }
    }

    /* ---------------- Contact Form (Telegram) ---------------- */
    const TELEGRAM_BOT_TOKEN = "8465953322:AAE7khM5mXGK4pH4xIkrRIphtXWyxTVfg6c";
    const TELEGRAM_CHAT_ID = "1306814987";

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // ✅ stop refresh

            const name = document.getElementById('name')?.value?.trim() || 'Anonymous';
            const phone = document.getElementById('phone')?.value?.trim() || '—';
            const message = document.getElementById('message')?.value?.trim() || '';

            if (!message) {
                formMessage.style.color = 'crimson';
                formMessage.textContent = 'Please enter a message before sending.';
                return;
            }

            setLoading(true);

            try {
                const whenTashkent = new Date().toLocaleString('en-US', {
                    timeZone: 'Asia/Tashkent',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });

                const telegramMessage = [
                    `<b>*New message from codelink.uz*</b>`,
                    `Name: <b>${name.replace(/</g,'&lt;')}</b>`,
                    `Phone: <code>${phone.replace(/</g,'&lt;')}</code>`,
                    `Time: ${whenTashkent}`,
                    ``,
                    `<b>Message:</b>`,
                    message.replace(/</g,'&lt;')
                ].join('\n');

                const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
                const res = await fetch(url, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: telegramMessage,
                        parse_mode: "HTML",
                        disable_web_page_preview: true
                    })
                });

                const json = await res.json();
                if (json.ok) {
                    formMessage.style.color = 'green';
                    formMessage.textContent = 'Thanks! Your message was sent.';
                    form.reset();
                } else {
                    throw new Error(json.description || 'Telegram API error');
                }
            } catch (err) {
                console.error('Send error:', err);
                formMessage.style.color = 'orange';
                formMessage.textContent = 'Could not send via Telegram.';
            }

            setLoading(false);
        });
    }

    function setLoading(loading) {
        if (!sendBtn) return;
        if (loading) {
            sendBtn.disabled = true;
            if (!sendBtn.dataset.orig) sendBtn.dataset.orig = sendBtn.textContent;
            sendBtn.innerHTML = 'Sending… <span class="spinner" aria-hidden="true"></span>';
        } else {
            sendBtn.disabled = false;
            sendBtn.innerHTML = sendBtn.dataset.orig || 'Send';
        }
    }

    /* ---------------- Scroll spy ---------------- */
    function updateActiveLink() {
        let activeId = sections[0]?.id || '';
        let top = window.scrollY + 120;
        for (const sec of sections) {
            if (sec.offsetTop <= top) activeId = sec.id;
        }
        navLinks.forEach(link => {
            const hash = link.getAttribute('href').slice(1);
            if (hash === activeId) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                link.removeAttribute('aria-current');
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink, { passive: true });
    window.addEventListener('load', updateActiveLink);
    updateActiveLink();

    /* ---------------- Header shrink ---------------- */
    const headerEl = document.querySelector('header');
    const onScroll = () => {
        if (window.scrollY > 8) headerEl?.classList.add('scrolled');
        else headerEl?.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------------- Phone helpers ---------------- */
    function digits(s) { return String(s || '').replace(/\D+/g, ''); }
    function formatPhone(p) {
        let d = digits(p);
        if (!d.startsWith('998')) d = '998' + d;
        d = d.slice(0, 12);
        const local = d.slice(3);
        const groups = [local.slice(0,2), local.slice(2,5), local.slice(5,7), local.slice(7,9)].filter(Boolean);
        return `+998-${groups.join('-')}`.replace(/-$/, '');
    }
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        const applyMask = () => { phoneInput.value = formatPhone(phoneInput.value); };
        phoneInput.addEventListener('focus', () => { if (!phoneInput.value) phoneInput.value = '+998-'; });
        phoneInput.addEventListener('input', applyMask);
        phoneInput.addEventListener('blur', () => { if (phoneInput.value === '+998-') phoneInput.value = ''; });
    }

    /* ---------------- Toast helper ---------------- */
    let toastTimer = null;
    function showToast(text) {
        if (!toastEl) return;
        toastEl.textContent = text;
        toastEl.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2000);
    }

    /* ---------------- Horizontal scroll helper (services) ---------------- */
    function setupHScroll(wrapper) {
        if (!wrapper) return;
        const viewport = wrapper.querySelector('.scroll-viewport');
        const prev = wrapper.querySelector('[data-scroll="prev"]');
        const next = wrapper.querySelector('[data-scroll="next"]');
        const update = () => {
            if (!viewport) return;
            const atStart = viewport.scrollLeft <= 2;
            const atEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 2;
            wrapper.classList.toggle('at-start', atStart);
            wrapper.classList.toggle('at-end', atEnd);
        };
        const scrollBy = (dir) => {
            const card = viewport?.querySelector('.service-card');
            const width = (card?.clientWidth || 340) + 28;
            viewport.scrollBy({ left: dir === 'next' ? width : -width, behavior: 'smooth' });
        };
        viewport?.addEventListener('scroll', update, { passive: true });
        prev?.addEventListener('click', () => scrollBy('prev'));
        next?.addEventListener('click', () => scrollBy('next'));
        viewport && (viewport.scrollLeft = 0);
        requestAnimationFrame(update);
    }
    setupHScroll(document.getElementById('servicesScroll'));
});

