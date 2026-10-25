import { useRef } from "react";
import useParticleNetwork from "@/hooks/useParticleNetwork";

const ParticleNetwork = ({
    particleCount = 90,
    connectionDistance = 120,
    speed = 0.35,
}) => {
    const canvasRef = useRef(null);

    useParticleNetwork(canvasRef, {
        particleCount,
        connectionDistance,
        speed,
    });

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full"
        />
    );
};

export default ParticleNetwork;
