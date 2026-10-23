import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/languageContext";

/**
 * Renders an about sidebar with profile information, availability badges,
 * and a downloadable resume.
 *
 * @example
 * <AboutSidebar />
 */
const AboutSidebar = () => {
    const {
        t: { about, accessibility },
    } = useLanguage();

    return (
        <aside className="mx-auto w-full max-w-sm lg:max-w-none">
            <Card className="flex flex-col items-center gap-3.5 p-6 text-center lg:gap-4 lg:px-8 lg:py-10">
                <div
                    aria-hidden="true"
                    className="relative flex size-26 items-center justify-center rounded-full bg-code bg-clip-content p-2.5 text-2xl font-bold text-primary lg:size-30 lg:text-3xl">
                    <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-linear-to-br from-primary to-accent-2 p-1 [mask-image:linear-gradient(#000_0_0),linear-gradient(#000_0_0)] [mask-clip:content-box,border-box] [mask-origin:content-box,border-box] mask-exclude" />
                    {about.name.slice(0, 1)}
                </div>

                <CardTitle>{about.name}</CardTitle>
                <CardDescription>{about.role}</CardDescription>

                <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary">
                        {about.badges.availability}
                    </Badge>
                    <Badge variant="secondary">{about.badges.workType}</Badge>
                </div>

                <Button size="lg" className="w-full" asChild>
                    <a
                        href="/resume.pdf"
                        download
                        aria-label={accessibility.downloadResume}>
                        {about.resume}
                    </a>
                </Button>
            </Card>
        </aside>
    );
};

export default AboutSidebar;
