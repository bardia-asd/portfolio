import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useLanguage } from "@/context/languageContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

/**
 * Renders a project preview with a static image and a video that plays
 * when the preview is hovered or receives keyboard focus.
 *
 * Respects the user's reduced-motion preference by keeping the video
 * paused and displaying the static image.
 *
 * @param {Object} props
 * @param {string} props.image - URL of the static preview image
 * @param {string} [props.video] - Optional URL of the project preview video
 * @param {string} props.title - Project title used for alternative text and the accessible link label
 * @param {string} [props.demo] - URL of the live project demo
 *
 * @example
 * <ProjectPreview
 *   image="/images/project.webp"
 *   video="/videos/project.mp4"
 *   title="Online Clothing Store"
 *   demo="https://example.com"
 * />
 */
const ProjectPreview = ({ image, video, title, demo }) => {
    const {
        t: { accessibility },
    } = useLanguage();

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const reducedMotion = usePrefersReducedMotion();

    const showVideo = Boolean(video) && isPlaying && !reducedMotion;

    useEffect(() => {
        const element = videoRef.current;
        if (!element) return;

        if (showVideo) {
            element.play().catch(() => {});
        } else {
            element.pause();
            element.currentTime = 0;
        }

        return () => element.pause();
    }, [showVideo]);

    const frameClass =
        "group relative block aspect-video overflow-hidden border-b bg-muted";

    const content = (
        <>
            {video && (
                <video
                    ref={videoRef}
                    src={video}
                    muted
                    loop
                    playsInline
                    preload="none"
                    aria-hidden="true"
                    tabIndex={-1}
                    className="absolute inset-0 size-full object-cover"
                />
            )}

            {image ? (
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className={cn(
                        "absolute inset-0 size-full object-cover object-top transition-opacity duration-300 motion-reduce:transition-none",
                        showVideo ? "opacity-0" : "opacity-100",
                    )}
                />
            ) : (
                <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center text-muted-foreground/60">
                    <ImageOff className="size-7" />
                </span>
            )}
        </>
    );

    if (!demo) {
        return <div className={frameClass}>{content}</div>;
    }

    return (
        <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={accessibility.viewProjectDemo.replace("{title}", title)}
            className={cn(
                frameClass,
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
            )}
            onMouseEnter={() => setIsPlaying(true)}
            onMouseLeave={() => setIsPlaying(false)}
            onFocus={() => setIsPlaying(true)}
            onBlur={() => setIsPlaying(false)}>
            {content}
        </a>
    );
};

ProjectPreview.propTypes = {
    image: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
};

export default ProjectPreview;
