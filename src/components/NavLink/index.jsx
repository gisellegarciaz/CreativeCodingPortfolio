import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { NavItem, SvgContainer } from './styles';

const NavLink = ({ children, SvgIcon, href }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const paths = svgRef.current?.querySelectorAll('path');
        if (paths) {
            paths.forEach(path => {
                const length = path.getTotalLength();
                // Estado inicial: Escondido e com a cor correta
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                    opacity: 0
                });
            });
        }
    }, [SvgIcon]);

    const onMouseEnter = () => {
        const paths = svgRef.current?.querySelectorAll('path');
        if (paths) {
            gsap.to(paths, {
                strokeDashoffset: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'expo.out', // O segredo do efeito "elástico" do Roger
                stagger: 0.1
            });
        }
    };

    const onMouseLeave = () => {
        const paths = svgRef.current?.querySelectorAll('path');
        if (paths) {
            paths.forEach(path => {
                const length = path.getTotalLength();
                gsap.to(path, {
                    strokeDashoffset: length,
                    opacity: 0,
                    duration: 0.4,
                    ease: 'power2.in'
                });
            });
        }
    };

    return (
        <NavItem href={href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <SvgContainer ref={svgRef}>
                {SvgIcon && <SvgIcon />}
            </SvgContainer>
            <span className="label">{children}</span>
        </NavItem>
    );
};

export default NavLink;