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
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/**
 * Renders a project link button or a disabled button when no URL is provided.
 *
 * @param {Object} props
 * @param {string} [props.href] - URL to the project demo or repository
 * @param {string} props.label - Text displayed on the button
 * @param {string} props.ariaLabel - Accessible label for the link
 * @param {React.ComponentType<{ size?: number; className?: string }>} props.icon - Icon component
 * @param {"default" | "secondary" | "outline" | "ghost" | "link"} props.variant - Button style variant
 *
 * @example
 * <ProjectLink
 *   href="https://example.com"
 *   label="Live Demo"
 *   ariaLabel="View project demo"
 *   icon={ExternalLink}
 *   variant="default"
 * />
 */
const ProjectLink = ({ href, label, ariaLabel, icon: Icon, variant }) => {
    if (!href) {
        return (
            <Button
                variant="outline"
                size="lg"
                disabled
                className="flex-1 border-dashed">
                <Icon aria-hidden="true" />
                {label}
            </Button>
        );
    }

    return (
        <Button asChild size="lg" variant={variant} className="flex-1">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}>
                <Icon size={18} aria-hidden="true" />
                {label}
            </a>
        </Button>
    );
};

/**
 * Renders a project card with a preview, description, technology badges,
 * and links to the live demo and source repository.
 *
 * @param {Object} props
 * @param {Object} props.item - Project data used to populate the card
 * @param {string} props.item.title - Project title
 * @param {string} props.item.description - Project description
 * @param {string} props.item.image - Project preview image URL
 * @param {string} [props.item.video] - Optional project preview video URL
 * @param {string} [props.item.demo] - Live demo URL
 * @param {string} [props.item.repo] - Source repository URL
 * @param {string[]} props.item.tools - Technologies used in the project
 * @param {Object} props.item.links - Localized labels for project links and tools
 *
 * @example
 * <ProjectCard item={project} />
 */
const ProjectCard = ({ item }) => {
    const {
        t: { accessibility },
    } = useLanguage();

    return (
        <Card className="flex w-full flex-col overflow-hidden transition-colors hover:border-primary/50 motion-reduce:transition-none">
            <ProjectPreview
                image={item.image}
                video={item.video}
                title={item.title}
                demo={item.demo}
            />

            <CardContent className="flex flex-1 flex-col gap-4 p-5">
                <div className="space-y-2">
                    <CardTitle className="text-lg leading-snug">
                        {item.title}
                    </CardTitle>
                    <CardDescription className="leading-7">
                        {item.description}
                    </CardDescription>
                </div>

                <ul
                    className="flex flex-wrap gap-2"
                    aria-label={item.links.toolsLabel}>
                    {item.tools.map((tool) => (
                        <li key={tool}>
                            <Badge variant="secondary" dir="ltr">
                                {tool}
                            </Badge>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex gap-3 border-t pt-4">
                    <ProjectLink
                        href={item.demo}
                        label={item.links.demo}
                        ariaLabel={accessibility.demoLink.replace(
                            "{title}",
                            item.title,
                        )}
                        icon={ExternalLink}
                        variant="default"
                    />
                    <ProjectLink
                        href={item.repo}
                        label={item.links.repo}
                        ariaLabel={accessibility.repoLink.replace(
                            "{title}",
                            item.title,
                        )}
                        icon={FaGithub}
                        variant="outline"
                    />
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
