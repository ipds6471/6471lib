"use client";

import "@/app/ui/global.css";
import { lexend } from "@/app/ui/fonts";
import { Providers } from "./providers";

import Sidebars from "@/app/ui/sidebars/sidebars";
import { Spacer } from "@nextui-org/spacer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <Providers>
          <main className="flex min-h-screen flex-row p-6 gap-4">
            <Sidebars />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
