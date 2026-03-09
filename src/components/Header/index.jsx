import React, { useEffect, useState } from "react";
import { GlassHeader, Nav, NavLink } from "./styles";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mouse, setMouse] = useState({ x: 50, y: 50 });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;

            setMouse({ x, y });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <GlassHeader $scrolled={scrolled}>
            <Nav>
                <NavLink href="#">Homepage</NavLink>
                <NavLink href="#">Download CV</NavLink>
                <NavLink href="#">Portfolio</NavLink>
                <NavLink href="#">Contact Me</NavLink>
            </Nav>
        </GlassHeader>
    );
}