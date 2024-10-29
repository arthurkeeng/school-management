import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Designed by Omeenee",
};

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
         
          {children}
        </body>
      </html>
  );
}

export default RootLayout