import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    Section,
    TextWrapper,
    Line
} from "./styles";

gsap.registerPlugin(ScrollTrigger);

const AboutBlock = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".line", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true, // anima só uma vez (fica mais elegante)
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

    return (
        <Section ref={containerRef}>
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
                    Building digital <strong>experiences</strong> where motion
                </Line>

                <Line className="line">
                    meets logic, and ideas turn into something
                </Line>

                <Line className="line">
                    <strong>you can feel</strong>.
                </Line>
            </TextWrapper>
        </Section>
    );
};

export default AboutBlock;