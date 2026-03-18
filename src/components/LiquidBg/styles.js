import styled, { keyframes } from 'styled-components';

const moveGradient = keyframes`
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(40px, -60px) scale(1.2); }
    66% { transform: translate(-30px, 30px) scale(0.8); }
    100% { transform: translate(0, 0) scale(1); }
`;

export const LiquidContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(100px);
    z-index: -5; 
    opacity: 0.7;
    pointer-events: none;
    overflow: hidden;
    background: var(--bg-main);
`;

export const Blob = styled.div`
    position: absolute;
    width: ${props => props.$size || '500px'};
    height: ${props => props.$size || '500px'};
    border-radius: 50%;
    background: ${props => props.$color};
    top: ${props => props.$top};
    left: ${props => props.$left};
    
    animation: ${moveGradient} ${props => props.$duration} ease-in-out infinite;
    animation-delay: ${props => props.$delay};
    
    will-change: transform;
    mix-blend-mode: screen;
`;