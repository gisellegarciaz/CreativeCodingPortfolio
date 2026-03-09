import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MainContainer, ContentSection } from './styles.js';

// Registramos o plugin
gsap.registerPlugin(ScrollTrigger);

const AtmosphereCanvas = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        // Criamos a animação
        const ctx = gsap.context(() => {
            gsap.to(containerRef.current, {
                backgroundColor: "#152866", // Azul escuro final
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",      // Começa quando o topo do container atinge o topo da tela
                    end: "bottom bottom",  // Termina quando o fundo do container atinge o fundo da tela
                    scrub: true,           // Faz a cor "seguir" o movimento do scroll (vai e volta)
                }
            });
        }, containerRef);

        return () => ctx.revert(); // Limpeza para evitar bugs de memória
    }, []);

    return (
        <MainContainer ref={containerRef}>
            <ContentSection>
                <h2>Role para baixo para ver a transição</h2>
            </ContentSection>
            <ContentSection>
                <h2>parte 2</h2>
            </ContentSection>
            <ContentSection>
                <h2>parte 3</h2>
            </ContentSection>
        </MainContainer>
    );
};

export default AtmosphereCanvas;