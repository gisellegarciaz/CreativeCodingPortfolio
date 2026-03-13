import { createGlobalStyle } from 'styled-components';
import UrbanistBlack from '../assets/fonts/Urbanist-Black.ttf'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Urbanist';
        src: url(${UrbanistBlack}) format('truetype');
        font-weight: 900;
        font-style: normal;
    }

    :root {
        --bg-deep: #091122;          /* Espaço profundo */
        --bg-main: #1a0b2e;          /* Roxo base */
        --bg-surface: #262551;       /* Superfície/Cards */
        --color-primary: #735293;    /* Roxo médio */
        --color-secondary: #3b333e;  /* Cinza arroxeado */
        --color-accent: #8e86c7;     /* Lavanda brilhante (Links/Botões) */
        --color-ocean: #283483;      /* Azul galáxia */
        
        --text-main: #ffffff;
        --text-dim: #d0c9ff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Urbanist', sans-serif;
        width: 100%;
        overflow-x: hidden;
        background-color: var(--bg-main);
        color: var(--text-main);
        cursor: none;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: var(--color-accent);
        text-decoration: none;
        transition: filter 0.3s ease;

        &:hover {
        filter: brightness(1.2);
        }
    }

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: var(--bg-deep);
    }
    ::-webkit-scrollbar-thumb {
        background: var(--color-primary);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: var(--color-accent);
    }
`;

export default GlobalStyle;