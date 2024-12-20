# @muybuen/cursor

![og](https://github.com/user-attachments/assets/8f4535af-34c1-40c7-b37f-e207f342a40c)

[![npm version](https://badge.fury.io/js/%40muybuen%2Fcursor.svg)](https://badge.fury.io/js/%40muybuen%2Fcursor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/@muybuen/cursor.svg)](https://www.npmjs.com/package/@muybuen/cursor)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/johnchourajr/cursor/graphs/commit-activity)

----

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
