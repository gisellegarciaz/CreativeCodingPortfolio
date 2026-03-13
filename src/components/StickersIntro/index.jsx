import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import {
    LiquidBg,
    Blob,
    IntroContainer,
    StickerWrapper,
    StackSticker,
    GiantTextContainer,
    GiantLine,
    Char,
    MarqueeContainer,
    MarqueeContent,
} from "./styles";

/* Stickers principais */

import G1_Img from "../../assets/sticker/sticker-g1@2x.png";
import G2_Img from "../../assets/sticker/sticker-g2@2x.png";
import G3_Img from "../../assets/sticker/sticker-g3@2x.png";

import MacBook_Img from "../../assets/sticker/sticker-mac@2x.png";
import Lampada_Img from "../../assets/sticker/sticker-lamp@2x.png";
import Pointer_Img from "../../assets/sticker/sticker-pointer@2x.png";
import Boom_Img from "../../assets/sticker/sticker-boom@2x.png";

/* Stack stickers */

import AiIcon from "../../assets/sticker/Ai@2x.png";
import FigIcon from "../../assets/sticker/Fig@2x.png";
import JaIcon from "../../assets/sticker/Ja@2x.png";
import JSIcon from "../../assets/sticker/JS@2x.png";
import PSIcon from "../../assets/sticker/Ps@2x.png";
import TSIcon from "../../assets/sticker/Ty@2x.png";
import ReIcon from "../../assets/sticker/Re@2x.png";
import NatIcon from "../../assets/sticker/Nat@2x.png";
import PyIcon from "../../assets/sticker/Py@2x.png";
import PostIcon from "../../assets/sticker/Pstg@2x.png";

const designIcons = [AiIcon, FigIcon, PSIcon];
const devIcons = [JaIcon, JSIcon, TSIcon, ReIcon, NatIcon, PyIcon, PostIcon];
const stackIcons = [...designIcons, ...devIcons];

export default function StickersIntro({ onComplete }) {

    const containerRef = useRef(null);

    const g1Ref = useRef(null);
    const g2Ref = useRef(null);
    const g3Ref = useRef(null);

    const macRef = useRef(null);
    const lampRef = useRef(null);
    const pointerRef = useRef(null);
    const boomRef = useRef(null);

    const flashRef = useRef(null);
    const giantTextRef = useRef(null);

    const floatAnimation = useRef(null);

    const lines = ["POWERFUL", "DESIGN", "CREA TIVE", "COD  ING"];

    useEffect(() => {

        const ctx = gsap.context(() => {

            const stackElements = gsap.utils.toArray(".stack-sticker");

            const tl = gsap.timeline({
                onComplete: () => onComplete && onComplete()
            });

            /* ---------------- POSIÇÕES INICIAIS ---------------- */

            gsap.set(
                [
                    g1Ref.current,
                    g2Ref.current,
                    g3Ref.current,
                    macRef.current,
                    lampRef.current,
                    pointerRef.current,
                    boomRef.current
                ],
                { clearProps: "all" }
            );

            gsap.set([g1Ref.current, g2Ref.current, g3Ref.current], {
                autoAlpha: 0,
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0
            });

            gsap.set(g1Ref.current, { autoAlpha: 1 });

            gsap.set(macRef.current, {
                y: 200,
                opacity: 0
            });

            gsap.set(pointerRef.current, {
                y: -500,
                autoAlpha: 0,
                scale: 0
            });

            gsap.set(lampRef.current, {
                y: -500,
                autoAlpha: 0,
                scale: 0
            });

            gsap.set(boomRef.current, {
                autoAlpha: 0,
                scale: 0
            });

            /* ---------------- GRID DAS STACKS ---------------- */

            const isMobile = window.matchMedia("(max-width:768px)").matches;

            const columns = isMobile ? 3 : 5;
            const gapX = isMobile ? 90 : 120;
            const gapY = isMobile ? 90 : 120;

            const safeRadius = 260;

            stackElements.forEach((el, i) => {

                const col = i % columns;
                const row = Math.floor(i / columns);

                const noise = 20;

                let x =
                    (col - (columns - 1) / 2) * gapX +
                    gsap.utils.random(-noise, noise);

                let y =
                    (row + 1) * gapY - 150 +
                    gsap.utils.random(-noise, noise);

                /* SAFE ZONE CIRCULAR */

                const distance = Math.sqrt(x * x + y * y);

                if (distance < safeRadius) {

                    const angle = Math.atan2(y, x);

                    x = Math.cos(angle) * safeRadius;
                    y = Math.sin(angle) * safeRadius;
                }

                const rotations = [-12, 18, -8, 10, -15, 6];
                const rotation = rotations[i % rotations.length];

                gsap.set(el, {
                    x,
                    y: y - 300,
                    rotation,
                    opacity: 0,
                    scale: 0.8
                });

            });

            /* ---------------- VOCÊ + TEXTO ---------------- */

            tl.fromTo(
                g1Ref.current,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )

                .fromTo(
                    ".giant-char",
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.02,
                        duration: 0.8,
                        ease: "power3.out"
                    },
                    "<"
                );

            /* ---------------- MACBOOK ---------------- */

            tl.to(
                macRef.current,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                },
                "<0.2"
            );

            /* ---------------- STACK STICKERS ---------------- */

            tl.to(
                stackElements,
                {
                    y: "+=300",
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power3.out"
                },
                "<0.2"
            );

            /* ---------------- FLUTUAÇÃO ---------------- */

            tl.call(() => {

                floatAnimation.current = gsap.to(
                    [g1Ref.current, macRef.current, ...stackElements],
                    {
                        y: "-=15",
                        duration: 3,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        stagger: { each: 0.1, from: "random" }
                    }
                );

            });

            /* ---------------- POINTER + LÂMPADA ---------------- */

            tl.to([pointerRef.current, lampRef.current], {
                y: -260,
                autoAlpha: 1,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.7)"
            });

            /* ---------------- TEXTO PISCANDO ---------------- */

            lines.forEach((_, lineIndex) => {

                tl.to(
                    `.line-${lineIndex} .giant-char`,
                    {
                        color: "rgba(255,255,255,0.4)",
                        duration: 0.15,
                        yoyo: true,
                        repeat: 1
                    },
                    "-=0.1"
                );

            });

            /* ---------------- ASSUSTADA ---------------- */

            tl.set(g1Ref.current, { autoAlpha: 0 })
                .set(g2Ref.current, { autoAlpha: 1 });

            tl.to(pointerRef.current, {
                scale: 0.85,
                duration: 0.08,
                repeat: 1,
                yoyo: true
            });

            /* ---------------- PISCANDO ---------------- */

            tl.to({}, { duration: 0.4 })

                .set(g2Ref.current, { autoAlpha: 0 })
                .set(g3Ref.current, { autoAlpha: 1 });

            /* ---------------- LÂMPADA BRILHANDO ---------------- */

            tl.to(lampRef.current, {
                filter: "drop-shadow(0 0 40px white) brightness(1.4)",
                repeat: 5,
                yoyo: true,
                duration: 0.04
            });

            /* ---------------- BOOM ---------------- */

            tl.to(boomRef.current, {
                autoAlpha: 1,
                scale: 0.5,
                duration: 0.01
            })

                .to(boomRef.current, {
                    scale: 1.8,
                    duration: 0.25,
                    ease: "expo.out"
                })

                .to(flashRef.current, { opacity: 1, duration: 0.04 }, "<")

                .to(flashRef.current, { opacity: 0, duration: 0.15 })

                .to(
                    containerRef.current,
                    {
                        x: -10,
                        duration: 0.05,
                        repeat: 6,
                        yoyo: true
                    },
                    "<"
                )

                .to(
                    [g3Ref.current, macRef.current, ...stackElements],
                    {
                        y: "+=40",
                        scale: 0.95,
                        duration: 0.15
                    },
                    "<"
                );

            /* ---------------- QUEDA FINAL ---------------- */

            tl.to(
                ".stack-sticker, .g3, .macbook, .boom, .marquee-container",
                {
                    y: 1200,
                    duration: 0.6,
                    stagger: 0.03,
                    ease: "power4.in",
                    onStart: () => floatAnimation.current?.kill()
                },
                "+=0.2"
            )

                .to(
                    containerRef.current,
                    {
                        yPercent: 100,
                        duration: 0.8,
                        ease: "power4.in",
                        onStart: () => {
                            gsap.to(giantTextRef.current, {
                                yPercent: -100,
                                duration: 0.8,
                                ease: "power4.in"
                            });
                        }
                    },
                    "-=0.4"
                );

        }, containerRef);

        return () => ctx.revert();

    }, [onComplete]);

    return (

        <IntroContainer ref={containerRef}>

            <div className="flash-layer" ref={flashRef}></div>

            <GiantTextContainer ref={giantTextRef}>
                {lines.map((word, i) => (
                    <GiantLine key={i} className={`line-${i}`}>
                        {word.split("").map((char, j) => (
                            <Char key={j} className="giant-char">
                                {char}
                            </Char>
                        ))}
                    </GiantLine>
                ))}
            </GiantTextContainer>

            <LiquidBg>
                <Blob $color="#735293" $top="-10%" $left="-10%" $duration="15s" $delay="0s" />
                <Blob $color="#283483" $top="50%" $left="60%" $duration="18s" $delay="-2s" />
                <Blob $color="#8e86c7" $top="20%" $left="30%" $duration="12s" $delay="-5s" />
                <Blob $color="#262551" $top="70%" $left="10%" $duration="20s" $delay="-3s" />
            </LiquidBg>

            <MarqueeContainer className="marquee-container">
                <MarqueeContent>
                    {[1, 2, 3, 4].map(n => (
                        <span key={n}>
                            CREATIVE CODING • POWERFUL DESIGN • FRONT-END • UI/UX •
                        </span>
                    ))}
                </MarqueeContent>
            </MarqueeContainer>

            {stackIcons.map((icon, i) => (
                <StackSticker key={i} className="stack-sticker">
                    <img src={icon} alt="stack" />
                </StackSticker>
            ))}

            <StickerWrapper ref={g1Ref} className="g1">
                <img src={G1_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={g2Ref} className="g2">
                <img src={G2_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={g3Ref} className="g3">
                <img src={G3_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={macRef} className="macbook">
                <img src={MacBook_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={lampRef} className="lamp">
                <img src={Lampada_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={pointerRef} className="pointer">
                <img src={Pointer_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={boomRef} className="boom">
                <img src={Boom_Img} alt="" />
            </StickerWrapper>

        </IntroContainer>

    );
}