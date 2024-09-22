"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ActionButtonProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ActionButton({
  children,
  className,
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={clsx(
        "border px-3 pt-1 pb-2 decoration-1 leading-4 rounded-md transition-all duration-150 ease-in-out",
        "hover:border-dotted hover:scale-105",
        "hover:border-dotted active:scale-95",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
