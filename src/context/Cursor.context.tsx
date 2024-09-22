import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type BuenCursorContextType = {
  cursorState: string;
  setCursorState: (cursorState: string) => void;
  cursorMessage: string;
  setCursorMessage: (cursorMessage: string) => void;
  enableCursor: boolean;
  setEnableCursor: (enableCursor: boolean) => void;
  viewportSize: { width: number; height: number };
};

const BuenCursorContext = createContext<BuenCursorContextType | undefined>(
  undefined,
);

export function useBuenCursorContext() {
  const context = useContext(BuenCursorContext);
  if (!context) {
    throw new Error("useBuenCursor must be used within a BuenCursorProvider");
  }
  return context;
}

export function BuenCursorProvider({ children }: { children: ReactNode }) {
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
    } else {
      document.body.classList.remove("buen-cursor-on");
    }
  }, [enableCursor]);

  return (
    <BuenCursorContext.Provider
      value={{
        cursorState,
        setCursorState,
        cursorMessage,
        setCursorMessage,
        enableCursor,
        setEnableCursor,
        viewportSize,
      }}
    >
      {children}
    </BuenCursorContext.Provider>
  );
}
