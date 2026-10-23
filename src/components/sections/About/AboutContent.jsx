import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/languageContext";

/**
 * Renders a group of skills as badges under a heading.
 *
 * @param {Object} props
 * @param {string} props.title - Heading for the skill group
 * @param {string[]} props.items - Skills to display
 * @param {"default" | "secondary" | "destructive" | "outline"} [props.variant="secondary"] - Badge style
 *
 * @example
 * <SkillGroup title="Frontend" items={["React", "JavaScript"]} />
 */
const SkillGroup = ({ title, items, variant = "secondary" }) => (
    <div className="flex flex-col gap-2.5">
        <h4 className="text-sm font-medium text-muted-foreground lg:text-base">
            {title}
        </h4>

        <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
                <li key={item}>
                    <Badge variant={variant}>{item}</Badge>
                </li>
            ))}
        </ul>
    </div>
);

/**
 * Renders the about section's description and categorized skills.
 *
 * @example
 * <AboutContent />
 */
const AboutContent = () => {
    const {
        t: { about },
    } = useLanguage();

    const { title, frontend, tools, learning } = about.skills;

    return (
        <div className="flex flex-col gap-5">
            <div>
                <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
                    {about.title}
                </h2>
                <p>{about.description}</p>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-medium lg:text-2xl">{title}</h3>

                <SkillGroup title={frontend.title} items={frontend.items} />
                <SkillGroup title={tools.title} items={tools.items} />
                <SkillGroup
                    title={learning.title}
                    items={learning.items}
                    variant="outline"
                />
            </div>
        </div>
    );
};

export default AboutContent;
