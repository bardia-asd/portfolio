import { useLanguage } from "@/context/languageContext";
import ProjectCard from "./ProjectCard";

/**
 * Renders the projects section with a heading, description, and a list of project cards.
 *
 * @example
 * <Projects />
 */
const Projects = () => {
    const {
        t: { projects },
    } = useLanguage();

    return (
        <section id="projects" className="scroll-mt-14 py-8 lg:py-12">
            <div>
                <h2 className="mb-2 text-2xl font-bold lg:text-3xl">
                    {projects.title}
                </h2>
                <p className="text-sm text-muted-foreground lg:text-base">
                    {projects.description}
                </p>
            </div>

            <div className="mt-5 flex flex-col gap-5 lg:mt-10 lg:gap-6">
                {projects.items.map((item) => (
                    <ProjectCard key={item.title} item={item} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
