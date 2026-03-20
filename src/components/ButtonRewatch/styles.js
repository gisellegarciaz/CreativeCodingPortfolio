import styled from 'styled-components';

export const RewatchBtn = styled.button`
    position: relative;
    padding: 25px 10px; 
    border-radius: 999px;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    
    color: rgba(255, 255, 255, 0.5);
    font-family: 'Urbanist', sans-serif;
    font-size: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: white;
        background: rgba(50, 8, 85, 0.5);
        border-color: rgba(138, 43, 226, 0.3);
        transform: scale(1.02);
    }
`;