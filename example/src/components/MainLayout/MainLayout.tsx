import { clsx } from "clsx";
import type { ReactNode } from "react";

import { Provider, TestProvider } from "../Provider";
export type LayoutProps = {
  children: ReactNode;
  isTest?: boolean;
};

export function MainLayout({ children, isTest = false }: LayoutProps) {
  const ProviderComponent = isTest ? TestProvider : Provider;

  return (
    <ProviderComponent>
      <main
        className={clsx(
          "min-h-screen",
          "grid grid-cols-4 md:grid-cols-6 gap-4",
          "px-4"
        )}
      >
        {children}
      </main>
    </ProviderComponent>
  );
}
