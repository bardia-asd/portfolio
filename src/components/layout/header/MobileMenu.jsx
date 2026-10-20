import { TextAlignJustifyCenter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/languageContext";
import { cn } from "@/lib/utils";

/**
 * Renders an accessible mobile menu toggle button with localized labels.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Whether the mobile navigation is open
 * @param {() => void} props.onToggle - Called when the button is clicked
 * @param {React.RefObject<HTMLButtonElement>} props.buttonRef - Ref used to detect outside clicks and manage focus
 *
 * @example
 * <MobileMenuButton
 *   isOpen={isOpen}
 *   onToggle={toggleMenu}
 *   buttonRef={buttonRef}
 * />
 */
const MobileMenuButton = ({ isOpen, onToggle, buttonRef }) => {
    const { t } = useLanguage();

    return (
        <div className="sm:hidden">
            <Button
                ref={buttonRef}
                variant="ghost"
                size="icon"
                aria-label={
                    isOpen
                        ? t.accessibility.closeMenu
                        : t.accessibility.openMenu
                }
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                onClick={onToggle}>
                {isOpen ? (
                    <X aria-hidden="true" />
                ) : (
                    <TextAlignJustifyCenter aria-hidden="true" />
                )}
            </Button>
        </div>
    );
};

/**
 * Renders collapsible mobile navigation with localized labels and active-section indicators.
 *
 * Hides the navigation from assistive technology and removes its contents
 * from keyboard navigation while the menu is closed.
 *
 * @param {Object} props
 * @param {Object.<string, string>} props.items - Navigation section IDs and their display labels
 * @param {boolean} props.isOpen - Whether the mobile navigation is open
 * @param {() => void} props.onClose - Called when a navigation link is clicked
 * @param {string} props.activeSection - ID of the currently active section
 * @param {React.RefObject<HTMLDivElement>} props.menuRef - Ref used to detect outside clicks
 *
 * @example
 * <MobileMenu
 *   items={t.nav}
 *   isOpen={isOpen}
 *   onClose={closeMenu}
 *   activeSection={activeSection}
 *   menuRef={menuRef}
 * />
 */
const MobileMenu = ({ items, isOpen, onClose, activeSection, menuRef }) => {
    const { t } = useLanguage();

    return (
        <div
            ref={menuRef}
            id="mobile-navigation"
            aria-hidden={!isOpen}
            inert={!isOpen}
            className={cn(
                "absolute inset-x-0 top-full z-50 grid overflow-hidden border-b bg-background shadow-lg transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none sm:hidden",
                isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "pointer-events-none grid-rows-[0fr] opacity-0",
            )}>
            <nav
                className="min-h-0 overflow-hidden"
                aria-label={t.accessibility.mainNavigation}>
                <ul className="container mx-auto space-y-1 px-5 py-3">
                    {Object.entries(items).map(([key, value]) => (
                        <li key={key}>
                            <a
                                href={`#${key}`}
                                aria-current={
                                    activeSection === key
                                        ? "location"
                                        : undefined
                                }
                                onClick={onClose}
                                className="block rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                {value}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export { MobileMenuButton, MobileMenu };
