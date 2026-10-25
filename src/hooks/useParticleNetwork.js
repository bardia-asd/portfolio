import { useEffect } from "react";

/**
 * Manages a theme-aware particle network animation on a canvas.
 *
 * @param {React.RefObject<HTMLCanvasElement>} canvasRef
 * @param {Object} options
 * @param {number} [options.particleCount=70]
 * @param {number} [options.connectionDistance=120]
 * @param {number} [options.speed=0.35]
 */
const useParticleNetwork = (
    canvasRef,
    { particleCount = 70, connectionDistance = 120, speed = 0.35 } = {},
) => {
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (!canvas || !context) return;

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );

        let animationFrame;
        let particles = [];
        let width = 0;
        let height = 0;

        const mouse = { x: -1000, y: -1000 };

        // Read colors from the active theme.
        const getThemeColors = () => {
            const styles = getComputedStyle(canvas);

            return {
                particle: styles.getPropertyValue("--primary").trim(),
                connection: styles.getPropertyValue("--accent-2").trim(),
                glow: styles.getPropertyValue("--highlight").trim(),
            };
        };

        let colors = getThemeColors();

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            width = rect.width;
            height = rect.height;

            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);

            context.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.min(
                particleCount,
                Math.max(20, Math.round((width * height) / 12000)),
            );

            particles = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
                radius: Math.random() * 1.5 + 0.7,
            }));

            draw();
        };

        const draw = () => {
            context.clearRect(0, 0, width, height);

            particles.forEach((particle, index) => {
                if (!reducedMotion.matches) {
                    particle.x += particle.vx;
                    particle.y += particle.vy;

                    if (particle.x < 0 || particle.x > width) {
                        particle.vx *= -1;
                    }

                    if (particle.y < 0 || particle.y > height) {
                        particle.vy *= -1;
                    }

                    // Gently attract particles toward the pointer.
                    const dx = mouse.x - particle.x;
                    const dy = mouse.y - particle.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < 150 && distance > 0) {
                        particle.x += (dx / distance) * 0.15;
                        particle.y += (dy / distance) * 0.15;
                    }
                }

                // Draw connections between nearby particles.
                for (let j = index + 1; j < particles.length; j++) {
                    const other = particles[j];
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < connectionDistance) {
                        context.beginPath();
                        context.moveTo(particle.x, particle.y);
                        context.lineTo(other.x, other.y);
                        context.strokeStyle = colors.connection;
                        context.globalAlpha =
                            (1 - distance / connectionDistance) * 0.3;
                        context.lineWidth = 0.7;
                        context.stroke();
                    }
                }

                // Draw glowing particles.
                context.globalAlpha = 0.8;
                context.shadowBlur = 8;
                context.shadowColor = colors.glow;
                context.fillStyle = colors.particle;

                context.beginPath();
                context.arc(
                    particle.x,
                    particle.y,
                    particle.radius,
                    0,
                    Math.PI * 2,
                );
                context.fill();

                context.shadowBlur = 0;
            });

            context.globalAlpha = 1;

            if (!reducedMotion.matches) {
                animationFrame = requestAnimationFrame(draw);
            }
        };

        const handleMouseMove = (event) => {
            const rect = canvas.getBoundingClientRect();

            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        const handleMotionChange = () => {
            cancelAnimationFrame(animationFrame);
            draw();
        };

        // Detect theme changes on the document or its descendants.
        const themeObserver = new MutationObserver(() => {
            colors = getThemeColors();

            // Redraw immediately when animation is disabled.
            if (reducedMotion.matches) {
                draw();
            }
        });

        themeObserver.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
            subtree: true,
        });

        const resizeObserver = new ResizeObserver(resizeCanvas);
        resizeObserver.observe(canvas);

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        reducedMotion.addEventListener("change", handleMotionChange);

        resizeCanvas();

        return () => {
            cancelAnimationFrame(animationFrame);
            resizeObserver.disconnect();
            themeObserver.disconnect();

            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            reducedMotion.removeEventListener("change", handleMotionChange);
        };
    }, [canvasRef, particleCount, connectionDistance, speed]);
};

export default useParticleNetwork;
