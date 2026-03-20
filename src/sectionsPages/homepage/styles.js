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
    
    background: #050533;

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