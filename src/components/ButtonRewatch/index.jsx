import React from 'react';
import { RewatchBtn } from './styles';

const ButtonRewatch = () => {
    const handleRewatch = () => {
        localStorage.removeItem('hasSeenIntro');
        window.location.reload();
    };

    return (
        <RewatchBtn onClick={handleRewatch}>
            Rewatch <br />Intro
        </RewatchBtn>
    );
};

export default ButtonRewatch;