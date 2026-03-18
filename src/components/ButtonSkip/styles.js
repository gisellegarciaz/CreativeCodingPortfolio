import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 0.5; transform: translateY(0); }
`;

export const SkipBtn = styled.button`
    position: fixed;
    bottom: 120px;
    right: 80px;
    z-index: 200;
    
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    
    color: white;
    font-family: 'Urbanist', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    animation: ${fadeIn} 0.8s ease forwards;
    animation-delay: 2s; /* Aparece depois de 2 segundos de intro */
    opacity: 0;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.4);
        opacity: 1 !important;
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;