# @muybuen/cursor

A TypeScript first Custom Cursor for React and Next.js

## Installation

To install the package, run:

```bash
npm install @muybuen/cursor
```

## Usage

### Using in Next.js App Router

1. Create a custom provider component to enclose your application in the cursor provider. This provider should include the `BuenCursorProvider` and the `Cursor` component from the package. The `Cursor` component should be placed at the end of the provider's children.

```tsx
// /AppProvider.tsx

"use client";

import { BuenCursorProvider, Cursor } from "@muybuen/cursor";
import { ReactNode } from "react";

import "@muybuen/cursor/dist/base.css";

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
```

2. Include that provider at the root layout of page template of your application

```tsx
// /app/layout.tsx

import { Provider } from "../AppProvider";

export default function RootLayout({ children }) {
  return(
    <html lang="en">
      <body className="font-sans">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
```

## Customizing

[coming soon]

## Type Properties

[coming soon]

## Contributing

This project is maintained by John Choura, but it open to contributions from anyone. See [CONTRIBUTORS](https://github.com/johnchourajr/buen-cursor/blob/main/CONTRIBUTORS.md) for a guide on how to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/johnchourajr/buen-cursor/blob/main/LICENSE) file for details.
