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
  const appVer = process.env.APP_VERSION;
  return (
    <html lang="en">
      <body className={`${lexend.className} antialiased`}>
        <Providers>
          <main className="flex min-h-screen flex-row p-6 gap-4">
            <Sidebars appVer={appVer} />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
