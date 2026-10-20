import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

/**
 * Manages the user's theme preference and synchronizes the active theme
 * with the system color scheme and document's dark mode class.
 *
 * Supports light, dark, and system preferences, persisting the selection
 * in localStorage.
 *
 * @returns {{
 *   theme: "light" | "dark",
 *   preference: "light" | "dark" | "system",
 *   toggleTheme: () => void,
 *   useSystemTheme: () => void
 * }} The active theme, saved preference, and theme control functions
 *
 * @example
 * const { theme, preference, toggleTheme, useSystemTheme } = useTheme();
 */
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
