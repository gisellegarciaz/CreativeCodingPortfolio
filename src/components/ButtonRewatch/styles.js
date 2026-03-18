import styled from 'styled-components';

export const RewatchBtn = styled.button`
    position: fixed;
    top: 32px; 
    right: 200px;
    z-index: 500;
    
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.4);
    
    font-family: 'Urbanist', sans-serif;
    font-size: 12px;
    letter-spacing: 1px;
    
    padding: 10px 30px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        color: white;
        border-color: #8a2be2; 
        background: rgba(138, 43, 226, 0.1);
    }
`;