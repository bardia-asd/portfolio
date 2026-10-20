import { useEffect } from "react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { useLanguage } from "./context/languageContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

const App = () => {
    const { language } = useLanguage();

    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    }, [language]);

    return (
        <div className="min-h-dvh flex flex-col">
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    );
};

export default App;
