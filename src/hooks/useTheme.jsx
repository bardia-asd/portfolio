import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTheme = () => {
    const [preference, setPreference] = useLocalStorage("theme", "system");

    const [systemTheme, setSystemTheme] = useState(() => {
        if (typeof window === "undefined") return "light";

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (event) => {
            setSystemTheme(event.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    const theme = preference === "system" ? systemTheme : preference;

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setPreference(theme === "dark" ? "light" : "dark");
    }, [theme, setPreference]);

    const useSystemTheme = useCallback(() => {
        setPreference("system");
    }, [setPreference]);

    return { theme, preference, toggleTheme, useSystemTheme };
};
