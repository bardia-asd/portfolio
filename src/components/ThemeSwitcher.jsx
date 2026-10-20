import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/context/languageContext";

/**
 * Renders an accessible button that toggles between light and dark themes.
 *
 * Uses the current language to provide a localized accessible label.
 *
 * @example
 * <ThemeSwitcher />
 */
const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const { language } = useLanguage();

    return (
        <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            aria-label={
                language === "fa"
                    ? theme === "dark"
                        ? "تغییر به تم روشن"
                        : "تغییر به تم تاریک"
                    : theme === "dark"
                      ? "Switch to light theme"
                      : "Switch to dark theme"
            }>
            {theme === "dark" ? (
                <Sun aria-hidden="true" />
            ) : (
                <Moon aria-hidden="true" />
            )}
        </Button>
    );
};

export default ThemeSwitcher;
