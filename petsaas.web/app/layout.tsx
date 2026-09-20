import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "../components/Providers";

export const metadata: Metadata = {
  title: "SisBixo",
  description: "Gestão inteligente para negócios pet."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
