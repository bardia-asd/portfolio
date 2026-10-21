import { useEffect, useState } from "react";

/**
 * Detects whether the user prefers reduced motion and tracks changes
 * to the system accessibility setting.
 *
 * @returns {boolean} Whether reduced motion is preferred
 *
 * @example
 * const prefersReducedMotion = usePrefersReducedMotion();
 */
export const usePrefersReducedMotion = () => {
    const [reduced, setReduced] = useState(() => {
        return typeof window !== "undefined"
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : false;
    });

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

        const onChange = (e) => setReduced(e.matches);

        mq.addEventListener("change", onChange);

        return () => mq.removeEventListener("change", onChange);
    }, []);

    return reduced;
};
