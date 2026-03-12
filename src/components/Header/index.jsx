import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { GlassHeader, Nav } from "./styles"; 
import NavLink from "./../NavLink";
import CircleSvg from '../../assets/SVGsCriativo-01.svg?react';
import RectSvg from '../../assets/SVGsCriativo-02.svg?react';
import CloudSvg from '../../assets/SVGsCriativo-03.svg?react';
import WavySvg from '../../assets/SVGsCriativo-04.svg?react';

export default function Header({ startAnimation }) {
    const [scrolled, setScrolled] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (startAnimation && headerRef.current) {
            gsap.to(headerRef.current, {
                y: 0, // Traz para a posição original (top 32px)
                opacity: 1,
                duration: 1,
                ease: "expo.out",
                delay: 0.02 // Espera a explosão derreter
            });
        }
    }, [startAnimation]);

    return (
        <GlassHeader $scrolled={scrolled} ref={headerRef}>
            <Nav>
                <NavLink SvgIcon={CircleSvg} href="#">Homepage</NavLink>
                <NavLink SvgIcon={WavySvg} href="#">Download CV</NavLink>
                <NavLink SvgIcon={CloudSvg} href="#">Portfolio</NavLink>
                <NavLink SvgIcon={RectSvg} href="#">Contact Me</NavLink>
            </Nav>
        </GlassHeader>
    );
}