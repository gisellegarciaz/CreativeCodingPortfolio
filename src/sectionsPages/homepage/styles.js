import styled from "styled-components";

export const MainScene = styled.div`
    position: relative;
    background-color: #d4d6f0;
    transition: background-color 0.3s ease;
`;

export const StickyContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

export const FolderMask = styled.div`
    width: 95vw;
    height: 90vh;
    border-radius: 70px;
    
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background: #9b9bcbff;

    .video-bg {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: 1;
    }
`;

export const HeroContent = styled.div`
    text-align: center;
    color: white;
    z-index: 2;
    h2 { font-size: clamp(3rem, 10vw, 6rem); margin: 0; text-transform: uppercase; }
    p { font-size: 1.5rem; opacity: 0.8; }
    pointer-events: none;
`;

export const NextSection = styled.section`
    height: 100vh;
    padding: 100px;
    display: flex;
    align-items: center;
`;

export const FooterContainer = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 8rem 6rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    background: var(--color-primary);
`;

export const FooterLeft = styled.div`
    flex: 1;
    height: 100%;

    /* placeholder invisível por enquanto */
`;

export const FooterRight = styled.div`
    width: 320px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;

    text-align: left;
`;

export const FooterText = styled.p`
    font-size: 0.95rem;
    line-height: 1.5;
    opacity: 0.7;
`;

export const SocialButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    a {
        font-size: 0.9rem;
        text-decoration: none;
        color: inherit;
        position: relative;

        transition: opacity 0.3s ease;

        &:hover {
            opacity: 0.6;
        }

        &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -2px;
            width: 0%;
            height: 1px;
            background: currentColor;
            transition: width 0.3s ease;
        }

        &:hover::after {
            width: 100%;
        }
    }
`;