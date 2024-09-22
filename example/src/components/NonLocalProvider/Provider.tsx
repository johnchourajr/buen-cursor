"use client";

import { BuenCursorProvider, Cursor } from "@muybuen/cursor";
import { ReactNode } from "react";

import "@muybuen/cursor/dist/index/base.css";

type ProviderProps = {
  children: ReactNode;
};

export function Provider({ children }: ProviderProps) {
  return (
    <BuenCursorProvider>
      {children}
      <Cursor className={"buen-cursor-mod"} />
    </BuenCursorProvider>
  );
}
