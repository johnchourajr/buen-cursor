import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from "react";
const BuenCursorContext = createContext(undefined);
export function useBuenCursorContext() {
    const context = useContext(BuenCursorContext);
    if (!context) {
        throw new Error("useBuenCursor must be used within a BuenCursorProvider");
    }
    return context;
}
export function BuenCursorProvider({ children, }) {
    const [cursorState, setCursorState] = useState("default");
    const [cursorMessage, setCursorMessage] = useState("");
    const [enableCursor, setEnableCursor] = useState(true);
    const [viewportSize, setViewportSize] = useState({
        width: 100,
        height: 100,
    });
    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        if (enableCursor) {
            document.body.classList.add("buen-cursor-on");
        }
        else {
            document.body.classList.remove("buen-cursor-on");
        }
    }, [enableCursor]);
    return (_jsx(BuenCursorContext.Provider, { value: {
            cursorState,
            setCursorState,
            cursorMessage,
            setCursorMessage,
            enableCursor,
            setEnableCursor,
            viewportSize,
        }, children: children }));
}
//# sourceMappingURL=Cursor.context.js.map