import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    const { t } = useLanguage();

    return (
        <Button
            size="icon"
            variant="ghost"
            onClick={toggleTheme}
            aria-label={
                theme === "light"
                    ? t.accessibility.switchToDarkTheme
                    : t.accessibility.switchToLightTheme
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
