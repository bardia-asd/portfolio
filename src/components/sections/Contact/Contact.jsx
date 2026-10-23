import { FaGithub, FaTelegram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Mail } from "lucide-react";
import { useLanguage } from "@/context/languageContext";
import { Button } from "@/components/ui/button";

const socials = [
    { key: "github", href: "https://github.com/bardia-asd", icon: FaGithub },
    { key: "telegram", href: "https://t.me/bardiaasd8", icon: FaTelegram },
    { key: "email", href: "mailto:bardiaasadi1382@gmail.com", icon: MdEmail },
];

/**
 * Renders the contact section with an introduction and links to social profiles.
 *
 * @example
 * <Contact />
 */
const Contact = () => {
    const {
        t: { contact },
    } = useLanguage();

    return (
        <section id="contact" className="scroll-mt-14 py-10 lg:py-16">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-primary to-accent px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
                <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
                    <div className="flex size-14 items-center justify-center rounded-2xl bg-background/15">
                        <Mail aria-hidden="true" className="size-7" />
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        {contact.title}
                    </h2>

                    <p className="max-w-xl text-sm leading-7 opacity-90 sm:text-base">
                        {contact.description}
                    </p>

                    <ul className="mt-2 flex flex-wrap justify-center gap-3">
                        {socials.map(({ key, href, icon: Icon }) => (
                            <li key={key}>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    asChild
                                    className="gap-2 transition-transform hover:-translate-y-0.5">
                                    <a
                                        href={href}
                                        {...(!href.startsWith("mailto:") && {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                        })}>
                                        <Icon
                                            aria-hidden="true"
                                            className="size-4"
                                        />
                                        {contact.socials[key]}
                                    </a>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Contact;
