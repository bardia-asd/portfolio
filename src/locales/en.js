const en = {
    name: "Bardia Asadi",
    nav: {
        home: "Home",
        projects: "Projects",
        about: "About Me",
        contact: "Contact Me",
    },

    hero: {
        intro: {
            greeting: "Hi, I'm",
            name: "Bardia",
            introduction: "",
        },
        title: {
            first: "Front-End",
            second: "Developer",
        },
        description:
            "I build user interfaces with React and JavaScript, focusing on making websites intuitive and enjoyable to use.",
        availability: "Open to work",
        cta: {
            projects: "View Projects",
            contact: "Get in Touch",
        },
    },

    projects: {
        title: "Projects",
        description: "The three projects I learned the most from.",
        items: [
            {
                title: "Right-to-Left Online Clothing Store",
                description:
                    "An online store featuring authentication, a shopping cart, search, and a multi-step checkout process.",
                tools: ["React", "Redux Toolkit", "Tailwind CSS"],
                image: "/images/fashion.webp",
                video: "/videos/fashion.mp4",
                demo: "https://fashion-store-k31w.vercel.app/",
                repo: "https://github.com/bardia-asd/fashion-store",
                links: {
                    demo: "Live Demo",
                    repo: "Source Code",
                },
            },
            {
                title: "Task and Project Management",
                description:
                    "Kanban boards with drag-and-drop task management, statistics charts, and a calendar view.",
                tools: ["React", "Dnd-kit", "Tailwind CSS"],
                image: "/images/kanban.webp",
                video: "/videos/kanban.mp4",
                demo: "https://kanban-app-lemon-xi.vercel.app/",
                repo: "https://github.com/bardia-asd/kanban-app",
                links: {
                    demo: "Live Demo",
                    repo: "Source Code",
                },
            },
            {
                title: "CSS Code Generator",
                description:
                    "Generate CSS and Tailwind classes with interactive controls and a live preview.",
                tools: ["React", "Tailwind CSS"],
                image: "/images/css-tool.webp",
                video: "/videos/css-tool.mp4",
                demo: "https://css-generator-sandy.vercel.app/gradient",
                repo: "https://github.com/bardia-asd/css-generator",
                links: {
                    demo: "Live Demo",
                    repo: "Source Code",
                },
            },
        ],
    },

    accessibility: {
        mainNavigation: "Main navigation",
        mobileNavigation: "Mobile navigation",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        switchToLightTheme: "Switch to light theme",
        switchToDarkTheme: "Switch to dark theme",
        switchLanguage: "Change language to Persian",
        viewProjectDemo: "{title} live demo (opens in a new tab)",
        demoLink: "View {title} live demo (opens in a new tab)",
        repoLink: "View {title} source code on GitHub (opens in a new tab)",
    },
};

export default en;
