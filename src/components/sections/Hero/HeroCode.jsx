import { useTypewriter } from "@/hooks/useTypewriter";
import { cn } from "@/lib/utils";

/**
 * Creates a syntax-highlighted token for a JavaScript keyword.
 *
 * @param {string} text - The text to highlight
 * @returns {{ text: string, color: string }} The token text and its color classes
 */
const kw = (text) => ({
    text,
    color: "text-purple-700 dark:text-[#C586C0]",
});

/**
 * Creates a syntax-highlighted token for a variable name.
 *
 * @param {string} text - The text to highlight
 * @returns {{ text: string, color: string }} The token text and its color classes
 */
const variable = (text) => ({
    text,
    color: "text-sky-700 dark:text-[#9CDCFE]",
});

/**
 * Creates a syntax-highlighted token for an object property key.
 *
 * @param {string} text - The property name to highlight
 * @returns {{ text: string, color: string }} The token text and its color classes
 */
const key = (text) => ({
    text,
    color: "text-sky-700 dark:text-[#9CDCFE]",
});

/**
 * Creates a syntax-highlighted token for a string literal.
 *
 * @param {string} text - The string literal to highlight
 * @returns {{ text: string, color: string }} The token text and its color classes
 */
const str = (text) => ({
    text,
    color: "text-orange-700 dark:text-[#CE9178]",
});

/**
 * Creates a syntax-highlighted token for a boolean literal.
 *
 * @param {string} text - The boolean value to highlight
 * @returns {{ text: string, color: string }} The token text and its color classes
 */
const bool = (text) => ({
    text,
    color: "text-blue-700 dark:text-[#569CD6]",
});

/**
 * Creates a syntax-highlighted token for punctuation and plain code text.
 *
 * @param {string} text - The code text to display
 * @returns {{ text: string, color: string }} The token text and its color classes
 */
const p = (text) => ({
    text,
    color: "text-slate-700 dark:text-[#D4D4D4]",
});

const tokens = [
    kw("const "),
    variable("dev"),
    p(" = {\n  "),
    key("name"),
    p(": "),
    str('"Bardia Asadi"'),
    p(",\n  "),
    key("stack"),
    p(": ["),
    str('"React"'),
    p(", "),
    str('"Redux Toolkit"'),
    p(", "),
    str('"JavaScript"'),
    p(", "),
    str('"Tailwind CSS"'),
    p("],\n  "),
    key("rtl"),
    p(": "),
    bool("true"),
    p(",\n  "),
    key("status"),
    p(": "),
    str('"open to work"'),
    p(",\n"),
    p("};"),
];

const fullText = tokens.map((t) => t.text).join("");

/**
 * Renders an animated, syntax-highlighted code card for the hero section.
 *
 * Uses the typewriter hook to reveal the code progressively while
 * preserving syntax highlighting for each token.
 *
 * @example
 * <HeroCode />
 */
const HeroCode = () => {
    const displayed = useTypewriter(fullText, 40);
    let remaining = displayed.length;

    return (
        <div className="overflow-hidden rounded-2xl border shadow-[0_4px_40px_0_hsl(var(--primary)/0.3)]">
            <div className="flex gap-2 bg-card px-5 py-4">
                <span className="size-2.5 rounded-full bg-destructive" />
                <span className="size-2.5 rounded-full bg-[#F2B861]" />
                <span className="size-2.5 rounded-full bg-success" />
            </div>

            <pre
                dir="ltr"
                className="h-52 overflow-x-auto bg-code p-5 text-left text-sm sm:text-base font-mono">
                {tokens.map((token, i) => {
                    if (remaining <= 0) return null;

                    const visible = token.text.slice(0, remaining);
                    remaining -= token.text.length;

                    return (
                        <span key={i} className={cn(token.color)}>
                            {visible}
                        </span>
                    );
                })}

                <span
                    aria-hidden="true"
                    className="animate-pulse text-primary motion-reduce:animate-none">
                    ▍
                </span>
            </pre>
        </div>
    );
};

export default HeroCode;
