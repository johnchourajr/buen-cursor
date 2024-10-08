import { useEffect, useState } from "react";
export function useCursorPosition() {
    const [position, setPosition] = useState({ x: -200, y: -200 });
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", updatePosition);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, []);
    return position;
}
//# sourceMappingURL=useCursorPosition.js.map