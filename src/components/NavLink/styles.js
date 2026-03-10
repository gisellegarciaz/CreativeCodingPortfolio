import styled from 'styled-components';

export const NavItem = styled.a`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    text-decoration: none;
    cursor: pointer;
    
    .label {
        position: relative;
        z-index: 2;
        font-size: 15px;
        font-weight: 500;
        color: #d0c9ff;
        transition: color 0.3s ease;
    }

    &:hover .label {
        color: #ffffff;
    }
`;

export const SvgContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130%; /* Um pouco maior que o texto */
    height: 140%;
    z-index: 1;
    pointer-events: none;

    svg {
        width: 100%;
        height: 100%;
        overflow: visible;
        
        path {
        fill: none !important;
        stroke: #a78bfa !important; 
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
        }
    }
`;