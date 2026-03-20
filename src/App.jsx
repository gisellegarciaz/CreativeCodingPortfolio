import React, { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import MainBody from './components/MainBody/index.jsx';
import MainContent from './components/MainContent/index';
import Header from './components/Header/index.jsx';
import Cursor from './components/Cursor/index.jsx';
import StickersIntro from './components/StickersIntro/index.jsx';
import Homepage from './sectionsPages/homepage/index.jsx';

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

  const handleRewatch = () => {
    localStorage.removeItem('hasSeenIntro');
    window.location.reload();
  };

  if (loading) return null;

  return (
    <>
      <GlobalStyle />
      <Cursor />

      <MainBody>
        {showIntro ? (
          <StickersIntro onComplete={handleIntroComplete} />
        ) : (
          <MainContent>
            <Header startAnimation={true} />
            <Homepage />
          </MainContent>
        )}
      </MainBody>
    </>
  );
}

export default App;