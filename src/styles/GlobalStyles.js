import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        width: 100%;
        overflow-x: hidden;
        background-color: #1a0b2e; /* Roxo inicial do seu case */
        color: white;
        cursor: none;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        :hover {
            cursor: none;}
    }

    /* Opcional: Estilização da scrollbar para combinar com a estética da galáxia */
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #050a1a;
    }
    ::-webkit-scrollbar-thumb {
        background: #4b2c71;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #6a3ea1;
    }
`;

export default GlobalStyle;