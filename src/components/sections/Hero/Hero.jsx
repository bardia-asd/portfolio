import React from "react";
import HeroContent from "./HeroContent";
import HeroCode from "./HeroCode";

/**
 * Renders the hero section with introductory content and a code preview.
 *
 * @example
 * <Hero />
 */
const Hero = () => {
    return (
        <section id="home" className="scroll-mt-14 py-8 lg:py-12">
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-center lg:gap-16">
                <HeroContent />
                <HeroCode />
            </div>
        </section>
    );
};

export default Hero;
