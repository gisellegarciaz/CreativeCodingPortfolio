import { createGlobalStyle } from 'styled-components';
import UrbanistBlack from '../assets/fonts/Urbanist-Black.ttf'
import ZcoolFont from '../assets/fonts/ZCOOLQingKeHuangYou-Regular.ttf';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Urbanist';
        src: url(${UrbanistBlack}) format('truetype');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Zcool';
        src: url(${ZcoolFont}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    :root {
        --bg-deep: #070B1F;          /* Azul quase preto (mais profundo e elegante) */
        --bg-main: #0F1A4B;          /* Azul royal escuro dominante */
        --bg-surface: #1C2A7A;       /* Superfície com leve vibração azul-violeta */

        --color-primary: #5B3FD9;    /* Roxo vibrante principal */
        --color-secondary: #2A2F5E;  /* Azul arroxeado neutro */
        --color-accent: #FF4FD8;     /* Rosa neon (highlight da imagem) */
        --color-ocean: #2F6BFF;      /* Azul elétrico glow */

        --text-main: #F5F7FF;        /* Branco levemente frio */
        --text-dim: #B8C0FF;         /* Lavanda suave */
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
        color: var(--text-main);
        cursor: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body, #root {
    background-color: var(--bg-main) !important;
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