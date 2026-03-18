import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import MainBody from './components/MainBody/index.jsx';
import MainContent from './components/MainContent/index';
import AtmosphereCanvas from './components/atmosphereCanvas/index.jsx';
import Header from './components/Header/index.jsx';
import Cursor from './components/Cursor/index.jsx';
import StickersIntro from './components/StickersIntro/index.jsx';
import ButtonRewatch from './components/ButtonRewatch/index.jsx';

function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    
    if (!hasSeenIntro) {
      setShowIntro(true);
    }
    setLoading(false);
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  if (loading) return null; // Evita "flash" branco no load

  return (
    <>
      <GlobalStyle />
      <Cursor />

      <MainBody>
        {showIntro ? (
          <StickersIntro onComplete={handleIntroComplete} />
        ) : (
          <MainContent>
            <AtmosphereCanvas />
            <Header startAnimation={true} />
            <ButtonRewatch />
            
            <section style={{ height: '200vh' }}>
            </section>
          </MainContent>
        )}
      </MainBody>
    </>
  );
}

export default App;