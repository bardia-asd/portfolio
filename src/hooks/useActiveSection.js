import { useEffect, useState } from "react";

/**
 * Tracks the currently active section using the Intersection Observer API.
 *
 * Updates the active section when a section enters the configured viewport
 * area and disconnects the observer when the effect is cleaned up.
 *
 * @param {string[]} sectionIds - The IDs of the sections to observe
 * @returns {string} The ID of the currently active section
 *
 * @example
 * const activeSection = useActiveSection(["home", "about", "projects", "contact"]);
 */
export const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top,
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
};
