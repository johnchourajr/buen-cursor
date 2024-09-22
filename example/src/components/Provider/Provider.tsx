"use client";

import { ReactNode } from "react";
import { BuenCursorProvider, Cursor } from "../../../../src";

import "../../../../src/style/cursor.css";

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
