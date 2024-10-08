import { Dispatch, ReactNode } from "react";
type BuenCursorContextType = {
    cursorMessage: string;
    setCursorMessage: Dispatch<string>;
    enableCursor: boolean;
    setEnableCursor: Dispatch<boolean>;
    viewportSize: {
        width: number;
        height: number;
    };
};
export declare function useBuenCursorContext(): BuenCursorContextType;
export declare function BuenCursorProvider({ children, }: {
    children: ReactNode;
}): JSX.Element;
export {};
