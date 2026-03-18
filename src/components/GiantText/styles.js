import styled from 'styled-components';

export const GiantTextWrapper = styled.div`
    position: fixed;
    top: -10;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #050010;
    z-index: -10;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    pointer-events: none;
`;

export const LottieContainer = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0.15;
    will-change: opacity;
    transform: translateZ(0); /* Força a camada na GPU */
`;