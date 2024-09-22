"use client";

/**
 * This provider is used to test pulling in the
 * @muybuen/cursor package and using the Cursor component.
 */

import { BuenCursorProvider, Cursor } from "@muybuen/cursor";
import { ReactNode } from "react";

import "@muybuen/cursor/dist/base.css";

type ProviderProps = {
  children: ReactNode;
};

export function TestProvider({ children }: ProviderProps) {
  return (
    <BuenCursorProvider>
      {children}
      <Cursor className={"buen-cursor-mod"} />
    </BuenCursorProvider>
  );
}
