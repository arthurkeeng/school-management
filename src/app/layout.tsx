import type { Metadata } from "next";
import Head from "next/head";
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
          <Head>
        {/* Link to your new icon */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
        <body>
         
          {children}
        </body>
      </html>
  );
}

export default RootLayout
