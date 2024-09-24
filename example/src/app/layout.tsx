import "@muybuen/cursor/dist/base.css";
import type { Metadata } from "next";
import React from "react";

import { GlobalHeader } from "@/components/GlobalHeader";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cursor.muybuen.dev"),
  title: "Buen Cursor",
  description: "",
  openGraph: {
    images: [
      {
        url: "/og.png",
        alt: "Buen Cursor",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <GlobalHeader />
        {children}
      </body>
    </html>
  );
}
