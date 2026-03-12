import styled from 'styled-components';

export const IntroContainer = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--bg-deep); /* #091122 da sua paleta */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    overflow: hidden;
`;

export const StickerWrapper = styled.div`
    position: absolute;
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

    &.g1, &.g2 {
        width: 380px;
        transform: translateY(-60px); 
    }

    &.macbook {
        width: 320px;
        transform: translateY(140px);
    }

    &.lamp {
        width: 100px;
        transform: translate(60px, -580px);
        
        img {
            transition: filter 0.2s ease-out;
            overflow: visible;
        }
    }

    &.pointer {
        width: 60px;
        transform: translate(110px, -400px);
    }

    &.boom {
        width: 600px;
        transform: translateY(-80px);
    }

    @media (max-width: 768px) {
        &.g1, &.g2 { width: 280px; }
        &.macbook { width: 240px; }
        &.boom { width: 400px; }
    }
`;