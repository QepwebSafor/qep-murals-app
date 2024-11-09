import type { Metadata } from "next";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";

import "./globals.css";
import { Quicksand } from "next/font/google";
import { TProvider } from "@/providers/toast-provider";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QEP Dogs App",
  description: "A private parking in Gandia Center"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Providers>
          <Navbar />
          <TProvider />
          {children}
         
        </Providers>
      </body>
    </html>
  );
}
