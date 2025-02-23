import type {Metadata} from "next";

import "./globals.css";
import {NavBar} from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prueba Técnica NOX-Creation",
  description: "Solución a la prueba tecnica de NOX-Creation",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="dark relative m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-white font-sans text-foreground antialiased">
        <header className="w-full text-xl font-bold leading-[4rem]">
          <NavBar />
        </header>
        <main className="relative m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
