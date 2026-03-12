import React, { useState } from 'react'; // Adicionado o import do useState
import GlobalStyle from './styles/GlobalStyles';
import MainBody from './components/MainBody/index.jsx';
import MainContent from './components/MainContent/index';
import AtmosphereCanvas from './components/atmosphereCanvas/index.jsx';
import Header from './components/Header/index.jsx';
import Cursor from './components/Cursor/index.jsx';
import StickersIntro from './components/StickersIntro/index.jsx';

function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Cursor />

      <MainBody>
        <MainContent>
          <AtmosphereCanvas />
          <Header startAnimation={introFinished} />
          {!introFinished && (
            <StickersIntro onComplete={() => setIntroFinished(true)} />
          )}

          <section style={{ height: '200vh' }}>
          </section>

        </MainContent>
      </MainBody>
    </>
  );
}

export default App;