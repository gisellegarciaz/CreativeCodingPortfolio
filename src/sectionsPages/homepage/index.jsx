import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../../components/Header";
import Manifesto from "../../components/Manifesto";
import FluidVid from "../../assets/video/FluidVid2.mp4";
import {
    MainScene,
    StickyContainer,
    FolderMask,
    HeroContent,
    NextSection
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
    const sceneRef = useRef(null);
    const folderRef = useRef(null);

    // Novas Refs para o Parallax
    const titleRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sceneRef.current,
                    start: "top top",
                    end: "+=150%",
                    scrub: 1.5, 
                    pin: true,
                },
            });

            tl.to(folderRef.current, {
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                width: "100vw",
                height: "100vh",
                borderRadius: "0px",
                ease: "power2.inOut"
            }, 0);

            tl.to(titleRef.current, {
                y: -150,
                scale: 1.1,
                ease: "none"
            }, 0);

            tl.to(textRef.current, {
                y: -80,
                opacity: 0.3,
                ease: "none"
            }, 0);

            gsap.to(sceneRef.current, {
                scrollTrigger: {
                    trigger: sceneRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
                backgroundColor: "#152866",
                ease: "none"
            });

        }, sceneRef);

        return () => ctx.revert();
    }, []);

    return (
        <MainScene ref={sceneRef}>
            {/* <Header startAnimation={true} /> */}

            <StickyContainer>
                <FolderMask ref={folderRef}>
                    <video autoPlay loop muted playsInline className="video-bg">
                        <source src={FluidVid} type="video/mp4" />
                    </video>

                    <HeroContent>
                        <h2 ref={titleRef}>Giselle Garcia</h2>
                        <p ref={textRef}>Creative Developer</p>
                    </HeroContent>
                </FolderMask>
            </StickyContainer>

            <NextSection>
                <Manifesto />
            </NextSection>
        </MainScene>
    );
}