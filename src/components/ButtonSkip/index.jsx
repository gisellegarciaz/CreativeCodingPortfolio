import React from 'react';
import { SkipBtn } from './styles';

const SkipButton = ({ onClick }) => {
    return (
        <SkipBtn onClick={onClick} type="button">
            Skip Intro
        </SkipBtn>
    );
};

export default SkipButton;