import styled, { keyframes } from 'styled-components';

const moveGradient = keyframes`
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.2); }
    66% { transform: translate(-20px, 20px) scale(0.8); }
    100% { transform: translate(0, 0) scale(1); }
`;

const scroll = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
`;

export const GiantTextContainer = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 95vw;
    z-index: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 0;
`;

export const GiantLine = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 0.8;
`;

export const Char = styled.span`
    font-family: 'Urbanist', sans-serif;
    font-weight: 900;
    font-size: clamp(3rem, 12vw, 15rem);
    color: transparent;
    -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.1);
    stroke-linejoin: round;
    paint-order: stroke fill;
    display: inline-block;
    line-height: 0.8;
    transition: color 0.5s ease;
`;

export const MarqueeContainer = styled.div`
    position: absolute;
    bottom: 15%;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    opacity: 0.3;
    z-index: 1;
`;

export const MarqueeContent = styled.div`
    display: inline-block;
    animation: ${scroll} 20s linear infinite;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    color: var(--text-color);
    
    span { margin-right: 2rem; }
`;

export const LiquidBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(80px); /* O segredo do efeito líquido é o blur alto */
    z-index: -1;
    opacity: 0.6;
`;

export const Blob = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: ${props => props.$color};
    top: ${props => props.$top};
    left: ${props => props.$left};
    animation: ${moveGradient} ${props => props.$duration} ease-in-out infinite;
    animation-delay: ${props => props.$delay};
`;

export const IntroContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-deep);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    overflow: hidden;
`;

export const StickerWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${props => props.$zIndex || 1};
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    img {
        width: 100%;
        height: auto;
        user-select: none;
    }

    /* --- REDIMENSIONAMENTO INDIVIDUAL --- */

    &.g1, &.g2, &.g3 {
        width: 380px;
        margin-top: -60px;
    }

    &.macbook {
        width: 320px;
        margin-top: 120px;
    }

    &.lamp {
        width: 100px;
        img {
            transition: filter 0.2s ease-out;
            overflow: visible;
        }
    }

    &.pointer {
        width: 60px;
    }

    &.boom {
        width: 600px;
    }

    @media (max-width: 768px) {
        &.g1, &.g2 { width: 280px; }
        &.macbook { width: 240px; }
        &.boom { width: 400px; }
    }
`;

export const StackSticker = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85px;
    z-index: ${props => props.$zIndex || 1};
    pointer-events: none;

    img {
        width: 100%;
        filter: 
            drop-shadow(0 0 1px #fff) 
            drop-shadow(0 10px 20px rgba(0,0,0,0.4));
        transition: transform 0.3s ease;
    }

    &:hover img {
        transform: scale(1.1) rotate(0deg);
        z-index: 10;
    }

    @media (max-width: 768px) {
        width: 60px;
    }
`;

export const FlashLayer = styled.div`
    position: absolute;
    inset: 0;
    background: white;
    opacity: 0;
    pointer-events: none;
    z-index: 20;
`;