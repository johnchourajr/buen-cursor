import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export type ActionLinkProps = {
  children: ReactNode;
  className?: string;
} & LinkProps;

export function ActionLink({ children, className, ...props }: ActionLinkProps) {
  return (
    <Link
      className={clsx(
        "underline underline-offset-2 decoration-1 transition-all duration-150 ease-in-out",
        "hover:decoration-dotted hover:underline-offset-3",
        "active:decoration-dotted active:underline-offset-1",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
