import { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import { MobileMenu, MobileMenuButton } from "./MobileMenu";
import { useLanguage } from "@/context/languageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = ["home", "projects", "about", "contact"];

/**
 * Renders the site header with desktop navigation, theme and language
 * switchers, and a responsive mobile navigation menu.
 *
 * Tracks the active section and closes the mobile menu when the user
 * interacts outside the menu or selects a navigation link.
 *
 * @example
 * <Header />
 */
const Header = () => {
    const { t } = useLanguage();
    const activeSection = useActiveSection(sectionIds);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!isMenuOpen) return;

            if (
                !menuButtonRef.current?.contains(event.target) &&
                !menuRef.current?.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
            <div className="relative container mx-auto flex items-center justify-between px-5 py-3">
                <a
                    href="#home"
                    className="flex items-center gap-2.5 text-lg font-medium"
                    aria-label={`${t.name}, home`}>
                    <span
                        aria-hidden="true"
                        className="inline-block size-3 rotate-45 rounded-xs bg-primary"
                    />
                    {t.name}
                </a>

                <nav
                    className="hidden sm:block"
                    aria-label={t.accessibility.mainNavigation}>
                    <ul className="flex items-center gap-8">
                        {Object.entries(t.nav).map(([key, value]) => (
                            <li key={key}>
                                <a
                                    href={`#${key}`}
                                    aria-current={
                                        activeSection === key
                                            ? "location"
                                            : undefined
                                    }
                                    className={cn(
                                        "text-sm transition-colors",
                                        activeSection === key
                                            ? "font-medium text-foreground"
                                            : "text-muted-foreground hover:text-foreground",
                                    )}>
                                    {value}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center">
                    <ThemeSwitcher />
                    <LanguageSwitcher />

                    <MobileMenuButton
                        isOpen={isMenuOpen}
                        onToggle={() => setIsMenuOpen((prev) => !prev)}
                        buttonRef={menuButtonRef}
                    />
                </div>
            </div>

            <MobileMenu
                items={t.nav}
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                activeSection={activeSection}
                menuRef={menuRef}
            />
        </header>
    );
};

export default Header;
