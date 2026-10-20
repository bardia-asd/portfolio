import { useState, useEffect } from "react";

/**
 * Synchronizes a state value with localStorage.
 *
 * Initializes state from the stored value when available and falls back
 * to the initial value if reading or parsing fails.
 *
 * @param {string} key - The localStorage key
 * @param {*} initialValue - The fallback value when no stored value exists
 * @returns {[*, import("react").Dispatch<import("react").SetStateAction<*>>]} The stored value and its state setter
 *
 * @example
 * const [theme, setTheme] = useLocalStorage("theme", "light");
 */
export const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.warn(`Reading localStorage key "${key}" failed:`, err);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.error(`Writing localStorage key "${key}" failed:`, err);
        }
    }, [key, value]);

    return [value, setValue];
};
