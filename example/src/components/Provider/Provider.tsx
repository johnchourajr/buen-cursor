"use client";

import { ReactNode } from "react";
import { BuenCursorProvider, Cursor } from "../../../../src";

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