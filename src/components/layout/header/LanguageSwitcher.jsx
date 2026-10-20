import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/languageContext";

/**
 * Renders a button that switches between Persian and English.
 *
 * @example
 * <LanguageSwitcher />
 */
const LanguageSwitcher = () => {
    const { t, changeLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            className="w-fit"
            onClick={changeLanguage}
            aria-label={t.accessibility.switchLanguage}>
            Fa/En
        </Button>
    );
};

export default LanguageSwitcher;
