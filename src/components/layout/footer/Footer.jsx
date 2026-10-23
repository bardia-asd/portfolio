import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/languageContext";
import { ArrowUp } from "lucide-react";

/**
 * Renders the site footer with copyright information and a back-to-top button.
 *
 * @returns {JSX.Element} The footer section.
 */
function Footer() {
    const { t } = useLanguage();

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="px-6 py-6">
            <div className="container px-5 mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-sm text-muted-foreground">
                    {t.footer.copyright}
                </p>

                <Button
                    onClick={handleBackToTop}
                    aria-label={t.footer.backToTop}
                    variant="ghost">
                    {t.footer.backToTop}
                    <ArrowUp size={16} aria-hidden="true" />
                </Button>
            </div>
        </footer>
    );
}

export default Footer;
