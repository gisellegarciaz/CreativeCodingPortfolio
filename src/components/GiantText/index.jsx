import React from 'react';
import Lottie from "lottie-react";
import { GiantTextWrapper, LottieContainer } from './styles';
import giantTextAnim from "../../assets/lottie/GiantText.json";

const GiantText = () => {
    return (
        <GiantTextWrapper className="giant-text-bg">
            <LottieContainer>
                <Lottie 
                    animationData={giantTextAnim} 
                    loop={true}
                    renderer="canvas" 
                    style={{ width: '100%', height: '100%' }}
                />
            </LottieContainer>
        </GiantTextWrapper>
    );
};

export default GiantText;