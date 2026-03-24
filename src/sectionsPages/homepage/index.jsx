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
    NextSection,
    FooterContainer,
    FooterLeft,
    FooterRight,
    FooterText,
    SocialButtons
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

export default function Homepage() {
    const sceneRef = useRef(null);
    const folderRef = useRef(null);

    const titleRef = useRef(null);
    const textRef = useRef(null);

    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // 🎬 HERO ANIMATION
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

            // 🎨 BACKGROUND POR SEÇÃO
            const sections = gsap.utils.toArray("[data-bg]");

            sections.forEach((section) => {
                const color = section.getAttribute("data-bg");

                ScrollTrigger.create({
                    trigger: section,
                    start: "top 60%",
                    end: "bottom 40%",
                    onEnter: () => {
                        gsap.to(sceneRef.current, {
                            backgroundColor: color,
                            duration: 1,
                            ease: "power2.inOut"
                        });
                    },
                    onEnterBack: () => {
                        gsap.to(sceneRef.current, {
                            backgroundColor: color,
                            duration: 1,
                            ease: "power2.inOut"
                        });
                    }
                });
            });

            // ✨ FOOTER ENTRY (opcional mas lindo)
            gsap.from(footerRef.current, {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                }
            });

        }, sceneRef);

        return () => ctx.revert();
    }, []);

    return (
        <MainScene ref={sceneRef}>

            {/* HERO */}
            <StickyContainer data-bg="var(--text-dim)">
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

            {/* MANIFESTO */}
            <NextSection data-bg="var(--color-secondary)">
                <Manifesto />
            </NextSection>

            {/* FOOTER */}
            <FooterContainer ref={footerRef} data-bg="var(--color-primary)">
                <FooterLeft>
                    {/* futuro elemento gráfico */}
                </FooterLeft>

                <FooterRight>
                    <h3>Let's build something together</h3>

                    <FooterText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vamos criar algo juntos?
                    </FooterText>

                    <SocialButtons>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </SocialButtons>
                </FooterRight>
            </FooterContainer>

        </MainScene>
    );
}