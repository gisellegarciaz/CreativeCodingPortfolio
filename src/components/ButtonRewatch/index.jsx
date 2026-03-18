import React from 'react';
import { RewatchBtn } from './styles';

const ButtonRewatch = () => {
    const handleRewatch = () => {
        localStorage.removeItem('hasSeenIntro');
        window.location.reload();
    };

    return (
        <RewatchBtn onClick={handleRewatch}>
            Rewatch Intro
        </RewatchBtn>
    );
};

export default ButtonRewatch;