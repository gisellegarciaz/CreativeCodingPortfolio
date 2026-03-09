import styled from "styled-components";

export const CursorDot = styled.div`
    position: fixed;

    top: ${({ $y }) => $y}px;
    left: ${({ $x }) => $x}px;

    width: ${({ $hover }) => ($hover ? "50px" : "24px")};
    height: ${({ $hover }) => ($hover ? "50px" : "24px")};

    background: rgba(139, 92, 246, 0.1);;

    border: 2px solid #8b5cf6;

    box-shadow: 0 0 6px rgba(178, 149, 248, 0.6);

    border-radius: 50%;

    transform: translate(-50%, -50%);

    pointer-events: none;

    transition:
        width 0.2s ease,
        height 0.2s ease,
        background 0.2s ease;

    z-index: 9999;
`;