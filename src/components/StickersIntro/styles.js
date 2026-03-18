import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
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

export const MarqueeContainer = styled.div`
    position: fixed;
    bottom: 25px;
    left: 0;
    width: 100%;
    height: 60px;

    background: rgba(138, 43, 226, 0.2);
    backdrop-filter: blur(10px);
    transform: rotate(-1deg) scale(1.02) translateZ(0);
    display: flex;
    align-items: center;
    will-change: transform;
    
    overflow: hidden;
    white-space: nowrap;
    z-index: 10;
    
    box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const MarqueeContent = styled.div`
    display: inline-block;
    animation: ${scroll} 40s linear infinite;
    font-family: 'Zcool', sans-serif;
    text-transform: uppercase;
    font-size: 1.8rem;
    letter-spacing: 2px;
    color: #fff;
    width: max-content;
    flex-shrink: 0;
    will-change: transform;
    
    span { 
        padding: 0 3rem;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        white-space: nowrap;
    }
`;

export const LottieWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0.2;
    pointer-events: none;
    
    /* Estabilizadores de GPU */
    will-change: opacity, transform;
    transform: translateZ(0);
`;
