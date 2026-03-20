import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import NavLink from "./../NavLink";
import CircleSvg from '../../assets/SVGsCriativo-01.svg?react';
import RectSvg from '../../assets/SVGsCriativo-02.svg?react';
import CloudSvg from '../../assets/SVGsCriativo-03.svg?react';
import WavySvg from '../../assets/SVGsCriativo-04.svg?react';
import ButtonRewatch from "../ButtonRewatch";

import { HeaderWrapper, GlassHeader, Nav, HamburgerIcon } from "./styles";

export default function Header({ startAnimation }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!menuOpen) {
                setScrolled(window.scrollY > 100);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    useEffect(() => {
        if (startAnimation && wrapperRef.current) {
            gsap.to(wrapperRef.current, {
                x: 0,
                y: "-50%",
                opacity: 1,
                duration: 1,
                ease: "expo.out",
                delay: 0.5, // Espera a explosão derreter
                onComplete: () => {
                gsap.set(wrapperRef.current, { clearProps: "x" });
            }
            });
        }
    }, [startAnimation]);

    return (
        <HeaderWrapper $scrolled={scrolled} ref={wrapperRef}>
            <GlassHeader $scrolled={scrolled} onClick={() => scrolled && setMenuOpen(!menuOpen)}>
                <HamburgerIcon $scrolled={scrolled}>
                    <span />
                    <span />
                    <span />
                </HamburgerIcon>

                <Nav $scrolled={scrolled}>
                    <NavLink SvgIcon={CircleSvg} href="#">Home</NavLink>
                    <NavLink SvgIcon={WavySvg} href="#">CV</NavLink>
                    <NavLink SvgIcon={CloudSvg} href="#">Portfolio</NavLink>
                    <NavLink SvgIcon={RectSvg} href="#">Contact Me</NavLink>
                </Nav>
            </GlassHeader>
            <ButtonRewatch />
        </HeaderWrapper>
    );
}