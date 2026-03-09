import styled from 'styled-components';

export const MainContainer = styled.div`
    width: 100%;
    min-height: 300vh; /* Precisamos de altura para ter scroll */
    background-color: #1a0b2e; /* Roxo escuro inicial */
    transition: background-color 0.3s ease-out;
`;

export const ContentSection = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: sans-serif;
    font-size: 2rem;
`;