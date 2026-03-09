import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import MainBody from './components/MainBody/index.jsx';
import MainContent from './components/MainContent/index';
import AtmosphereCanvas from './components/atmosphereCanvas/index.jsx';
import Header from './components/Header/index.jsx';
import Cursor from './components/Cursor/index.jsx';

function App() {
  return (
    <>
      <MainBody>
        <MainContent>
          <GlobalStyle />
          <Cursor />
          <Header />
          <AtmosphereCanvas />
        </MainContent>
      </MainBody>
    </>
  );
}

export default App;