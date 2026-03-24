import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";

import {
    Section,
    TextWrapper,
    Line,
    SplineOverlay
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

const AboutBlock = () => {
    const containerRef = useRef(null);
    const splineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // ✨ animação das linhas
            gsap.from(".line", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true,
                },
                y: 50,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.18,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // 🔥 interação leve com mouse (parallax no spline)
    const handleMouseMove = (e) => {
        if (!splineRef.current) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 0.5;
        const y = (e.clientY / window.innerHeight - 0.5) * 0.5;

        splineRef.current.setVariable("mouseX", x);
        splineRef.current.setVariable("mouseY", y);
    };

    return (
        <Section ref={containerRef} onMouseMove={handleMouseMove}>
            
            <TextWrapper>
                <Line className="line">
                    I like things that move, and move people.
                </Line>

                <Line className="line">
                    <strong>I build</strong> with intent,
                </Line>

                <Line className="line">
                    <strong>and design</strong> with code at the core.
                </Line>

                <Line className="line space" />

                <Line className="line">
                    Creating digital <strong>experiences</strong> where motion
                </Line>

                <Line className="line">
                    meets logic, and ideas turn into something
                </Line>

                <Line className="line">
                    <strong>you can feel</strong>.
                </Line>
            </TextWrapper>

            {/* 🔥 Spline overlay */}
            {/* <SplineOverlay>
                <Spline
                    scene="https://prod.spline.design/TxU8TqDyRR-7j0XT/scene.splinecode"
                    onLoad={(spline) => (splineRef.current = spline)}
                />
            </SplineOverlay> */}

        </Section>
    );
};

export default AboutBlock;