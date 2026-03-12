import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent; /* Os blocos já cobrem o fundo */
`;

export const OverlayBlock = styled.div`
  position: absolute;
  bottom: 0;
  /* Divide a tela igualmente pelo número de cores */
  width: ${props => 100 / props.$total}%;
  left: ${props => (100 / props.$total) * props.$index}%;
  height: 100%;
  background-color: ${props => props.$bgColor};
`;

export const TitleContainer = styled.div`
  position: relative;
  z-index: 10000;
  overflow: hidden;

  h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
    color: #ffffff;
    font-weight: 300;
    letter-spacing: 0.8rem;
    text-shadow: 0 0 20px rgba(142, 134, 199, 0.5); /* Brilho da Galáxia */
  }
`;