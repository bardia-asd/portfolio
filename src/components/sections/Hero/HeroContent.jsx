import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/languageContext";

/**
 * Renders the hero section's introductory content, availability badge,
 * headline, description, and calls to action.
 *
 * Uses localized content from the language context.
 *
 * @example
 * <HeroContent />
 */
const HeroContent = () => {
    const {
        t: { hero },
    } = useLanguage();

    return (
        <div className="flex flex-col gap-4 lg:gap-6">
            <Badge
                variant="secondary"
                className="w-fit rounded-full px-4 py-1.5 text-sm">
                <span
                    aria-hidden="true"
                    className="inline-block size-2 rounded-full bg-success"
                />
                {hero.availability}
            </Badge>

            <p className="text-muted-foreground">
                {hero.intro.greeting}{" "}
                <span className="text-primary">{hero.intro.name}</span>{" "}
                {hero.intro.introduction}{" "}
                <span
                    aria-hidden="true"
                    className="inline-block origin-[70%_70%] animate-wave motion-reduce:animate-none">
                    👋
                </span>
            </p>

            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                {hero.title.first}{" "}
                <span className="text-primary">{hero.title.second}</span>
            </h1>

            <p className="text-muted-foreground lg:text-lg">
                {hero.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row lg:gap-4">
                <Button asChild size="lg">
                    <a href="#projects">{hero.cta.projects}</a>
                </Button>

                <Button asChild size="lg" variant="outline">
                    <a href="#contact">{hero.cta.contact}</a>
                </Button>
            </div>
        </div>
    );
};

export default HeroContent;
