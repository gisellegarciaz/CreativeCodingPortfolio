import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
    IntroContainer,
    StickerWrapper
} from './styles';


// Imports dos seus SVGs como componentes
import G1_Img from '../../assets/sticker/sticker-g1@2x.png';
import G2_Img from '../../assets/sticker/sticker-g2@2x.png';
import MacBook_Img from '../../assets/sticker/sticker-mac@2x.png';
import Lampada_Img from '../../assets/sticker/sticker-lamp@2x.png';
import Pointer_Img from '../../assets/sticker/sticker-pointer@2x.png';
import Boom_Img from '../../assets/sticker/sticker-boom@2x.png';

export default function StickersIntro({ onComplete }) {
    const containerRef = useRef(null);
    const g1Ref = useRef(null);
    const g2Ref = useRef(null);
    const macRef = useRef(null);
    const lampRef = useRef(null);
    const pointerRef = useRef(null);
    const boomRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        // Reset de visibilidade
        gsap.set([g2Ref.current, lampRef.current, pointerRef.current, boomRef.current], {
            autoAlpha: 0 // autoAlpha é melhor que opacity pois lida com visibility
        });

        // Setup Inicial
        gsap.to([g1Ref.current, g2Ref.current, macRef.current], {
            y: "-=20",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        tl.to({}, { duration: 0.5 }) // Pequena espera
            .to([pointerRef.current, lampRef.current], {
                autoAlpha: 1,
                x: -10, // quanto maior o numero, mais pra direita
                y: -220, // quanto maior o numero, mais pra baixo ou seja, numero negativo sobe
                startAt: { x: 300, y: 100 }, // Começa fora e vem para o centro
                duration: 1.2,
                ease: "power3.out"
            })
            .to(pointerRef.current, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
            .to(lampRef.current, {
                filter: "drop-shadow(0 0 30px rgba(255, 255, 0, 0.9)) brightness(1.3)",
                repeat: 3,
                yoyo: true,
                duration: 0.2,
                ease: "power3.out"
            }, "-=0.1")

            // aqui troca a expressão
            .set(g1Ref.current, { display: 'none' })
            .set(g2Ref.current, { autoAlpha: 1 })
            .to({}, { duration: 0.3 }) // pausa dramática
            .to(pointerRef.current, { autoAlpha: 0, x: 50, duration: 0.3 }) // precisa?

            // O BOOM
            .set(boomRef.current, { autoAlpha: 1 })
            .fromTo(boomRef.current,
                { scale: 0 },
                { scale: 1.3, duration: 0.6, ease: "elastic.out(1, 0.5)" }
            )
            .to(lampRef.current, { autoAlpha: 0, scale: 0, duration: 0.2 }, "<")

            // O FINAL: Derretimento sem erro de caractere
            .to(containerRef.current, {
                delay: 1,
                duration: 1.5,
                yPercent: 100, // Move 100% para baixo
                ease: "power4.in"
            });

    }, [onComplete]);

    return (
        <IntroContainer ref={containerRef}>

            <StickerWrapper ref={g1Ref} $zIndex={2} className="g1">
                <img src={G1_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={g2Ref} $zIndex={2} className="g2">
                <img src={G2_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={macRef} $zIndex={3} className="macbook">
                <img src={MacBook_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={lampRef} $zIndex={4} className="lamp">
                <img src={Lampada_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={pointerRef} $zIndex={5} className="pointer">
                <img src={Pointer_Img} alt="" />
            </StickerWrapper>

            <StickerWrapper ref={boomRef} $zIndex={6} className="boom">
                <img src={Boom_Img} alt="" />
            </StickerWrapper>
        </IntroContainer>
    );
}