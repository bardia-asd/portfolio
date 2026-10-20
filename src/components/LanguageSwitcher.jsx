import { useLanguage } from "@/context/languageContext";
import { Button } from "./ui/button";

/**
 * Renders a button that switches between Persian and English.
 *
 * @example
 * <LanguageSwitcher />
 */
const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            className="w-fit"
            onClick={changeLanguage}
            aria-label={
                language === "fa"
                    ? "تغییر زبان به انگلیسی"
                    : "Change language to Persian"
            }>
            Fa/En
        </Button>
    );
};

export default LanguageSwitcher;
