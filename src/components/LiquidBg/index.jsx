import React from 'react';
import { LiquidContainer, Blob } from './styles';

const LiquidBg = () => {
    const blobs = [
        { color: "#735293", top: "-10%", left: "-10%", duration: "15s", delay: "0s", size: "600px" },
        { color: "#283483", top: "50%", left: "60%", duration: "18s", delay: "-2s", size: "550px" },
        { color: "#8e86c7", top: "20%", left: "30%", duration: "12s", delay: "-5s", size: "500px" },
        { color: "#262551", top: "70%", left: "10%", duration: "20s", delay: "-3s", size: "700px" }
    ];

    return (
        <LiquidContainer className="liquid-bg">
            {blobs.map((blob, index) => (
                <Blob 
                    key={index}
                    $color={blob.color}
                    $top={blob.top}
                    $left={blob.left}
                    $duration={blob.duration}
                    $delay={blob.delay}
                    $size={blob.size}
                />
            ))}
        </LiquidContainer>
    );
};

export default LiquidBg;