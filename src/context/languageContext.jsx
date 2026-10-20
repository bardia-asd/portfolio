import { createContext, useContext, useState } from "react";
import en from "@/locales/en";
import fa from "@/locales/fa";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const LanguageContext = createContext(null);

const translations = { en, fa };

/**
 * Provides language state, translations, and a language-switching function
 * to components throughout the application.
 *
 * Persists the selected language in localStorage.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The components that receive language context
 *
 * @example
 * <LanguageProvider>
 *   <App />
 * </LanguageProvider>
 */
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useLocalStorage("language", "fa");

    const changeLanguage = () => {
        const nextLanguage = language === "fa" ? "en" : "fa";

        localStorage.setItem("language", nextLanguage);
        setLanguage(nextLanguage);
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, t, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

/**
 * Provides access to the current language, translations, and language switcher.
 *
 * @returns {{ language: string, t: Object, changeLanguage: Function }}
 * @throws {Error} If used outside a LanguageProvider
 *
 * @example
 * const { language, t, changeLanguage } = useLanguage();
 */
export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
};
