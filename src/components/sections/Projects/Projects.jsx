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
            <div className="max-w-2xl">
                <h2 className="mb-2 text-2xl font-bold lg:text-3xl">
                    {projects.title}
                </h2>
                <p className="text-sm text-muted-foreground lg:text-base">
                    {projects.description}
                </p>
            </div>

            <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6">
                {projects.items.map((item) => (
                    <li key={item.title} className="flex">
                        <ProjectCard item={item} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
