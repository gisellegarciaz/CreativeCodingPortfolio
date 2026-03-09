import { useEffect, useState } from "react";
import { CursorDot } from "./styles";

export default function Cursor() {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hoverLink, setHoverLink] = useState(false);

    useEffect(() => {

        const move = (e) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const handleEnter = () => setHoverLink(true);
        const handleLeave = () => setHoverLink(false);

        window.addEventListener("mousemove", move);

        const elements = document.querySelectorAll("a, button");

        elements.forEach(el => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        return () => {
            window.removeEventListener("mousemove", move);

            elements.forEach(el => {
                el.removeEventListener("mouseenter", handleEnter);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };

    }, []);

    return (
        <CursorDot
            $x={position.x}
            $y={position.y}
            $hover={hoverLink}
        />
    );
}