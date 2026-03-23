import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 10rem 6vw;
    overflow: hidden;
    font-family: Anova;
`;

export const TextWrapper = styled.div`
    max-width: 1000px;
`;

export const Line = styled.p`
    font-size: clamp(1.8rem, 2.6vw, 3rem);
    line-height: 1.25;
    color: #eaeaea;
    margin: 0;
    letter-spacing: -0.02em;

    transform: translateX(0);
    transition: transform 0.5s ease;

    &.space {
        height: 2.5rem;
    }

    strong {
        color: var(--color-accent);
        font-weight: 500;
    }
`;