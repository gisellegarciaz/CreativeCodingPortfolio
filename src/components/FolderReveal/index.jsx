import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Header"; // Ajuste o caminho conforme sua estrutura
import { MainWrapper, FolderContent, HeroText } from "./styles";
import FluidVid from "../../assets/video/FluidVid.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function FolderReveal() {
    const folderRef = useRef(null);

    useEffect(() => {
        if (folderRef.current) {
            gsap.to(folderRef.current, {
                scrollTrigger: {
                    trigger: ".trigger-container",
                    start: "top top",
                    end: "+=150%", 
                    scrub: 1,
                    pin: true,
                },
                // Transição para tela cheia
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                width: "100vw",
                height: "100vh",
                borderRadius: "0px",
                ease: "none", // 'none' costuma ser melhor para scrub de scroll
            });
        }
    }, []);

    return (
        <div className="trigger-container" style={{ overflow: 'hidden' }}>
            <Header startAnimation={true} />

            <MainWrapper>
                <FolderContent ref={folderRef}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: -1
                        }}
                    >
                        <source src={FluidVid} type="video/mp4" />
                    </video>

                    <HeroText>
                        <h2>Giselle Garcia</h2>
                        <p>Creative Coding & UX/UI Design</p>
                    </HeroText>
                </FolderContent>
            </MainWrapper>

            {/* Espaço para o ScrollTrigger respirar */}
            <div style={{ height: "100vh" }} />
        </div>
    );
}