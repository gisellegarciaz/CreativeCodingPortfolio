import React, { useEffect, useRef, useState, Suspense, lazy } from 'react';
import Lottie from "lottie-react";
import gsap from 'gsap';
import {
    IntroContainer,
    MarqueeContainer,
    MarqueeContent,
    LottieWrapper
} from './styles';

import SkipButton from "../ButtonSkip";
import GiantText from "../GiantText";
import LiquidBg from "../BackgroundLiquid";
import BgVideo from "../../assets/video/FluidVid3.mp4";
import IntroVideoApple from "../../assets/video/IntroMotion.mp4";
import IntroVideoStandard from "../../assets/video/IntroMotion.mp4";
// import Scene from "../Canvas/scene";
// const Scene = lazy(() => import("../Canvas/scene"));

export default function StickersIntro({ onComplete }) {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const backgroundRef = useRef(null);
    const lottieRef = useRef(null);
    const [videoEnded, setVideoEnded] = useState(false);

    useEffect(() => {
        gsap.ticker.lagSmoothing(1000, 16); // evita glitches

        // Se o vídeo terminar, roda a animação de saída
        if (videoEnded) {
            const exitTl = gsap.timeline({
                onComplete: () => { if (onComplete) onComplete(); }
            });

            exitTl.to([videoRef.current, ".marquee-container"], {
                y: 1200,
                duration: 0.6,
                ease: "power4.in",
                stagger: 0.05
            })
                .to(containerRef.current, {
                    yPercent: 100,
                    duration: 0.8,
                    ease: "power4.in"
                }, "-=0.4");
        }
    }, [videoEnded, onComplete]);

    return (
        <IntroContainer ref={containerRef}>
            {/* <LiquidBg /> */}
            <video
                ref={backgroundRef}
                autoPlay
                muted
                loop
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', // Garante que preencha tudo sem distorcer
                    zIndex: -1, // Fica atrás de tudo
                    opacity: 0.6 // Suave para não brigar com os stickers
                }}
            >
                <source src={BgVideo} type="video/mp4" />
            </video>

            {/* <GiantText /> */}
            {/* <Suspense fallback={null}>
                <Scene />
            </Suspense> */}

            <SkipButton onClick={() => {
                localStorage.setItem('hasSeenIntro', 'true');
                onComplete();
            }} />

            <MarqueeContainer className="marquee-container">
                <MarqueeContent>
                    {[1, 2].map(n => (
                        <span key={n}>CREATIVE CODING • POWERFUL DESIGN • FRONT-END • UI/UX • </span>
                    ))}
                </MarqueeContent>
            </MarqueeContainer>

            <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={() => setVideoEnded(true)}
                style={{
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) translateZ(0)',
                    width: '80%',
                    zIndex: 99,
                    // mixBlendMode: 'screen',
                    pointerEvents: 'none'
                }}
            >
                <source src={IntroVideoApple} type="video/mp4" />
                {/* <source src={IntroVideoStandard} type="video/mp4" /> */}
                Seu navegador não suporta o vídeo.
            </video>
        </IntroContainer>
    );
}