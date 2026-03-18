import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const FluidBackground = () => {
    const meshRef = useRef();

    // GSAP: Faz o objeto reagir sutilmente à posição do mouse
    useGSAP(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;

            gsap.to(meshRef.current.rotation, {
                x: y * 0.5,
                y: x * 0.5,
                duration: 2,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    });

    // useFrame roda a cada frame (60fps) para manter a deformação fluida
    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Você pode animar a intensidade da distorção aqui se quiser
        meshRef.current.distort = 0.4 + Math.sin(time * 0.5) * 0.1;
    });

    return (
        <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.8}>
            <MeshDistortMaterial
                color="#3d007a"      // Roxo base profundo
                speed={3}            // Velocidade da "pulsação" das ondas
                distort={0.45}       // Intensidade da deformação
                radius={1}
                metalness={0.9}      // Máximo metal para brilho estilo a imagem
                roughness={0.15}     // Baixa rugosidade para reflexos nítidos
                emissive="#1a0033"   // Um leve brilho interno
            />
        </Sphere>
    );
};

export default FluidBackground;