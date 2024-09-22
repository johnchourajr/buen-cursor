import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { clsx } from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import { useBuenCursorContext } from "./Cursor.context";
import { useCursorPosition } from "./useCursorPosition";
export function Cursor({ className, cursorHoverClassName, cursorClickClassName, cursorDisabledClassName, cursorFlipClassName, cursorPointerClassName, }) {
    /**
     * Hooks
     */
    const ref = useRef(null);
    const { x, y } = useCursorPosition();
    /**
     * State
     */
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [flipCursor, setFlipCursor] = useState(false);
    /**
     * Context
     */
    const { cursorMessage, setCursorMessage, enableCursor, setEnableCursor, viewportSize, } = useBuenCursorContext();
    const handleCursorEvents = useCallback((e) => {
        const target = e.target;
        const eventType = e.type;
        switch (eventType) {
            case "mouseenter":
                {
                    const dataCursor = target.getAttribute("data-cursor");
                    const message = target.getAttribute("data-cursor-message");
                    setIsHovering(true);
                    setIsDisabled(dataCursor === "false");
                    setCursorMessage(message || "");
                }
                break;
            case "mouseleave":
                setIsHovering(false);
                setIsDisabled(false);
                setCursorMessage("");
                break;
            case "pointerdown":
                setIsClicking(true);
                break;
            case "pointerup":
                setIsClicking(false);
                break;
            default:
                break;
        }
    }, [setCursorMessage]);
    useEffect(() => {
        const elements = document.querySelectorAll("a, button, [data-cursor], [data-cursor-drag], [data-cursor-message]");
        elements.forEach((el) => {
            el.addEventListener("mouseenter", handleCursorEvents);
            el.addEventListener("mouseleave", handleCursorEvents);
            el.addEventListener("pointerdown", handleCursorEvents);
            el.addEventListener("pointerup", handleCursorEvents);
        });
        document.addEventListener("pointerdown", handleCursorEvents);
        document.addEventListener("pointerup", handleCursorEvents);
        return () => {
            elements.forEach((el) => {
                el.removeEventListener("mouseenter", handleCursorEvents);
                el.removeEventListener("mouseleave", handleCursorEvents);
                el.removeEventListener("pointerdown", handleCursorEvents);
                el.removeEventListener("pointerup", handleCursorEvents);
            });
            document.removeEventListener("pointerdown", handleCursorEvents);
            document.removeEventListener("pointerup", handleCursorEvents);
        };
    }, [handleCursorEvents]);
    useEffect(() => {
        const body = document.querySelector("body");
        body.addEventListener("mouseenter", () => setIsDisabled(false));
        body.addEventListener("mouseleave", () => setIsDisabled(true));
    }, []);
    useEffect(() => {
        if (isDisabled) {
            setEnableCursor(false);
        }
        else {
            setEnableCursor(true);
        }
    }, [isDisabled]);
    useEffect(() => {
        setFlipCursor(!!viewportSize && x > viewportSize.width - 200);
    }, [viewportSize, x]);
    return (_jsx("div", { id: "cursor", children: _jsxs("div", { ref: ref, className: clsx(className, "buen-cursor", isHovering && clsx("buen-cursor--state-hover", cursorHoverClassName), isClicking && clsx("buen-cursor--state-click", cursorClickClassName), isDisabled &&
                clsx("buen-cursor--state-disabled", cursorDisabledClassName), cursorMessage && "buen-cursor--state-message", flipCursor && clsx("buen-cursor--state-flip", cursorFlipClassName)), style: { left: x, top: y }, "data-flip": flipCursor, children: [!!enableCursor && (_jsx("div", { className: clsx("buen-cursor--pointer", cursorPointerClassName) })), _jsx("div", { className: clsx("buen-cursor--message-outer"), children: _jsx("div", { className: clsx("buen-cursor--message-inner"), children: _jsx("p", { children: cursorMessage }) }) })] }) }));
}
//# sourceMappingURL=Cursor.js.map