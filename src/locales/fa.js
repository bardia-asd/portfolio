const fa = {
    name: "بردیا اسدی",
    nav: {
        home: "خانه",
        projects: "پروژه‌ها",
        about: "درباره من",
        contact: "تماس با من",
    },

    hero: {
        intro: {
            greeting: "سلام، من",
            name: "بردیا",
            introduction: "هستم",
        },
        title: {
            first: "توسعه‌دهنده",
            second: "فرانت‌اند",
        },
        description:
            "با React و JavaScript رابط‌های کاربری می‌سازم که استفاده از وب‌سایت‌ها رو ساده‌تر و لذت‌بخش‌تر می‌کنن.",
        availability: "آماده همکاری",
        cta: {
            projects: "مشاهده پروژه‌ها",
            contact: "ارتباط با من",
        },
    },

    projects: {
        title: "پروژه‌ها",
        description: "سه پروژه‌ای که بیشترین چیزها را از آن‌ها یاد گرفتم.",
        items: [
            {
                title: "فروشگاه آنلاین پوشاک راست‌چین",
                description:
                    "فروشگاه با احراز هویت، سبد خرید، جست‌وجو و ثبت سفارش چندمرحله‌ای.",
                tools: ["React", "Redux Toolkit", "Tailwind CSS"],
                image: "/images/fashion.webp",
                video: "/videos/fashion.mp4",
                demo: "https://fashion-store-k31w.vercel.app/",
                repo: "https://github.com/bardia-asd/fashion-store",
                links: {
                    demo: "مشاهده دمو",
                    repo: "مشاهده کد",
                },
            },
            {
                title: "مدیریت وظایف و پروژه",
                description:
                    "بردهای کانبان با جابه‌جایی وظایف، نمودار آمار و نمای تقویم.",
                tools: ["React", "Dnd-kit", "Tailwind CSS"],
                image: "/images/kanban.webp",
                video: "/videos/kanban.mp4",
                demo: "https://kanban-app-lemon-xi.vercel.app/",
                repo: "https://github.com/bardia-asd/kanban-app",
                links: {
                    demo: "مشاهده دمو",
                    repo: "مشاهده کد",
                },
            },
            {
                title: "ابزار تولید کد CSS",
                description:
                    "تولید کد CSS و کلاس‌های Tailwind با کنترل‌های تعاملی و پیش‌نمایش زنده.",
                tools: ["React", "Tailwind CSS"],
                image: "/images/css-tool.webp",
                video: "/videos/css-tool.mp4",
                demo: "https://css-generator-sandy.vercel.app/gradient",
                repo: "https://github.com/bardia-asd/css-generator",
                links: {
                    demo: "مشاهده دمو",
                    repo: "مشاهده کد",
                },
            },
        ],
    },

    about: {
        name: "بردیا اسدی",
        role: "توسعه‌دهنده جونیور فرانت‌اند",
        badges: {
            availability: "آماده همکاری",
            workType: "دورکاری",
        },
        resume: "دانلود رزومه",

        title: "درباره من",
        description:
            "من توسعه‌دهنده جونیور فرانت‌اند هستم و با React و Tailwind CSS وب‌اپلیکیشن‌های واکنش‌گرا، دسترس‌پذیر و کاربرپسند می‌سازم. از تبدیل ایده‌ها به پروژه‌های واقعی لذت می‌برم، از فروشگاه‌های آنلاین تا اپلیکیشن‌های خبری و ورزشی. به‌دنبال فرصتی برای رشد در یک تیم حرفه‌ای هستم.",

        skills: {
            title: "مهارت‌ها",
            frontend: {
                title: "مهارت‌های فرانت‌اند",
                items: [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React",
                    "طراحی واکنش‌گرا",
                    "Tailwind CSS",
                ],
            },
            tools: {
                title: "ابزارها و فناوری‌ها",
                items: ["Git", "GitHub", "Vite", "Redux Toolkit"],
            },
            learning: {
                title: "در حال یادگیری",
                items: ["TypeScript"],
            },
        },
    },

    accessibility: {
        mainNavigation: "پیمایش اصلی",
        mobileNavigation: "پیمایش موبایل",
        openMenu: "باز کردن منو",
        closeMenu: "بستن منو",
        switchToLightTheme: "تغییر به تم روشن",
        switchToDarkTheme: "تغییر به تم تاریک",
        switchLanguage: "تغییر زبان به انگلیسی",
        viewProjectDemo: "مشاهده نسخه زنده {title} (در زبانه جدید باز می‌شود)",
        demoLink: "مشاهده نسخه زنده {title} (در زبانه جدید باز می‌شود)",
        repoLink:
            "مشاهده کد منبع {title} در گیت‌هاب (در زبانه جدید باز می‌شود)",
        downloadResume: "دانلود رزومه (PDF)",
    },
};

export default fa;
