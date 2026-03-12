import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { LoaderContainer, OverlayBlock, TitleContainer } from './styles';

const IntroLoader = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    const colors = [
        "var(--bg-deep)",      // #091122
        "var(--color-ocean)",  // #283483
        "var(--bg-surface)",   // #262551
        "var(--color-secondary)", // #3b333e
        "var(--color-primary)",   // #735293
        "var(--color-accent)"     // #8e86c7
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                gsap.set(containerRef.current, { display: 'none' });
            }
        });

        tl.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 }
        )
            .to(textRef.current, {
                y: -50, opacity: 0, duration: 0.8, ease: "power4.in", delay: 0.8
            })
            .to(".overlay-block", {
                height: 0,
                duration: 1.4,
                stagger: {
                    amount: 0.4, // Tempo total entre o primeiro e o último bloco
                    from: "edges" // Os blocos das pontas podem subir primeiro, ou "start" para sequência
                },
                ease: "expo.inOut"
            });
    }, []);

    return (
        <LoaderContainer ref={containerRef}>
            {colors.map((color, index) => (
                <OverlayBlock
                    key={index}
                    className="overlay-block"
                    $bgColor={color}
                    $index={index}
                    $total={colors.length}
                />
            ))}

            <TitleContainer>
                <h1 ref={textRef}>Giselle Garcia</h1>
            </TitleContainer>
        </LoaderContainer>
    );
};

export default IntroLoader;