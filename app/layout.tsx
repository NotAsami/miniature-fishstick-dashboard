import "./globals.css";
import type { ReactNode } from 'react';
import { TwentyFirstToolbar } from "@21st-extension/toolbar-next";
import { ReactPlugin } from "@21st-extension/react";

export const metadata = {
    title: "My Dashboard",
    description: "A personal web dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
            {children}
            <TwentyFirstToolbar config={{ plugins: [ReactPlugin] }} />
        </body>
        </html>
    );
}