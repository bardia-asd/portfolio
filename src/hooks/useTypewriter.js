import { useEffect, useState } from "react";

/**
 * Reveals text one character at a time at the specified speed.
 *
 * Restarts the typing animation whenever the text or speed changes.
 *
 * @param {string} text - The text to display character by character
 * @param {number} speed - The delay between characters in milliseconds (default: 60)
 * @returns {string} The text displayed so far
 *
 * @example
 * const displayedText = useTypewriter("Front-End Developer", 60);
 */
export const useTypewriter = (text, speed = 60) => {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        setDisplayed("");
        let i = 0;

        const intervalId = setInterval(() => {
            i++;
            setDisplayed(text.slice(0, i));

            if (i >= text.length) clearInterval(intervalId);
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return displayed;
};
