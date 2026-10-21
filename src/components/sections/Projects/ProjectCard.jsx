import PropTypes from "prop-types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/languageContext";
import ProjectPreview from "./ProjectPreview";

/**
 * Renders a project card with a preview, description, technology badges,
 * and links to the live demo and source repository.
 *
 * @param {Object} props
 * @param {Object} props.item - The project data used to populate the card
 *
 * @example
 * <ProjectCard item={project} />
 */
const ProjectCard = ({ item }) => {
    const {
        t: { accessibility },
    } = useLanguage();

    return (
        <Card className="grid grid-cols-1 overflow-hidden lg:grid-cols-3">
            <div className="lg:order-2 lg:min-w-0">
                <ProjectPreview
                    image={item.image}
                    video={item.video}
                    title={item.title}
                    demo={item.demo}
                />
            </div>

            <CardContent className="flex flex-col gap-4 p-5 sm:p-6 lg:col-span-2 lg:order-1 lg:min-w-0">
                <div className="space-y-2">
                    <CardTitle className="text-lg lg:text-xl">
                        {item.title}
                    </CardTitle>

                    <CardDescription>{item.description}</CardDescription>
                </div>

                <ul
                    className="flex flex-wrap gap-2"
                    aria-label={item.links.toolsLabel}>
                    {item.tools.map((tool) => (
                        <li key={tool}>
                            <Badge variant="secondary">{tool}</Badge>
                        </li>
                    ))}
                </ul>

                <div className="mt-2 flex flex-col gap-3 border-t pt-4 sm:flex-row">
                    <Button asChild size="lg" className="h-12 w-full sm:w-auto">
                        <a
                            href={item.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={accessibility.demoLink.replace(
                                "{title}",
                                item.title,
                            )}>
                            {item.links.demo}
                        </a>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="h-12 w-full sm:w-auto">
                        <a
                            href={item.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={accessibility.repoLink.replace(
                                "{title}",
                                item.title,
                            )}>
                            {item.links.repo}
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

ProjectCard.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        video: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        demo: PropTypes.string.isRequired,
        repo: PropTypes.string.isRequired,
        tools: PropTypes.arrayOf(PropTypes.string).isRequired,
        links: PropTypes.shape({
            toolsLabel: PropTypes.string.isRequired,
            demo: PropTypes.string.isRequired,
            repo: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default ProjectCard;
