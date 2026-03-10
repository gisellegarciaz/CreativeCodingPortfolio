import React, { useEffect, useState } from "react";
import { GlassHeader, Nav } from "./styles"; 
import NavLink from "./../NavLink";
import CircleSvg from '../../assets/SVGsCriativo-01.svg?react';
import RectSvg from '../../assets/SVGsCriativo-02.svg?react';
import CloudSvg from '../../assets/SVGsCriativo-03.svg?react';
import WavySvg from '../../assets/SVGsCriativo-04.svg?react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <GlassHeader $scrolled={scrolled}>
            <Nav>
                <NavLink SvgIcon={CircleSvg} href="#">Homepage</NavLink>
                <NavLink SvgIcon={WavySvg} href="#">Download CV</NavLink>
                <NavLink SvgIcon={CloudSvg} href="#">Portfolio</NavLink>
                <NavLink SvgIcon={RectSvg} href="#">Contact Me</NavLink>
            </Nav>
        </GlassHeader>
    );
}