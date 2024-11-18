import type { Metadata } from "next";
import Providers from "./Providers";
import Navbar from "@/components/navbar/Navbar";


import { Quicksand } from "next/font/google";
import { TProvider } from "@/providers/toast-provider";
import "./globals.css";
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Murals and Criptos App',
  description: 'A blog with graffitys all around the world',
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
