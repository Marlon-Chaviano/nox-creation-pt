import type {Metadata} from "next";

import "./globals.css";
import {NavBar} from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Prueba Técnica NOX-Creation",
  description: "Solución a la prueba tecnica de NOX-Creation",
  viewport: "0.0",

};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="dark m-auto grid min-h-screen grid-rows-[auto,1fr,auto] bg-white font-sans text-foreground antialiased">
        <header className="w-full text-xl font-bold leading-[4rem]">
          <NavBar />
        </header>
        <main className="relative m-auto">{children}</main>
        <footer className="text-center leading-[4rem] opacity-70">
          © 2024 NOX-Creation Prueba Técnica
        </footer>
      </body>
    </html>
  );
}
