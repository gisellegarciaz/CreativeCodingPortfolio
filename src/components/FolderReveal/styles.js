import styled from "styled-components";

export const MainWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdfdfd;
    position: relative;
`;

export const FolderContent = styled.div`
    width: 90vw; 
    height: 80vh;
    background: var(--color-secondary);
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* Dica: se a pasta sumir, use clip-path: inset(0) para testar */
    clip-path: path("M729.13,101.55h-250.32c-34.9,0-43.27-23.36-58.1-46.07C407.72,35.61,388.94,6.86,343.83,6.86H64.07C28.68,6.86,0,35.54,0,70.93V929.07c0,35.39,28.68,64.07,64.07,64.07H935.93c35.39,0,64.07-28.68,64.07-64.07V165.62c0-35.39-28.68-64.07-64.07-64.07h-206.79Z");
    
    overflow: hidden;
`;

export const HeroText = styled.div`
    color: #fff;
    text-align: center;
    z-index: 2;

    h2 { 
        font-size: clamp(3rem, 8vw, 6rem); 
        margin: 0;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: -2px;
    }

    p {
        font-size: clamp(1rem, 2vw, 1.5rem);
        opacity: 0.8;
        font-family: 'Inter', sans-serif;
    }
`;