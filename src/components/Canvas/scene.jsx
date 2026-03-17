import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import FluidBackground from './FluidBackground';

const Scene = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            background: '#050010' // Fundo escuro para destacar o brilho
        }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]} // Otimização de performance para telas Retina
            >
                <Suspense fallback={null}>
                    {/* Iluminação que cria o contraste metálico */}
                    <ambientLight intensity={0.4} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#8a2be2" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#3c3ccd" />

                    {/* Float dá um movimento suave de flutuação ao objeto inteiro */}
                    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                        <FluidBackground />
                    </Float>

                    {/* Environment ajuda a criar reflexos realistas no metal */}
                    <Environment preset="night" />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;