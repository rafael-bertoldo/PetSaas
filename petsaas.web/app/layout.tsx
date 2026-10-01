import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "../components/Providers";
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"]
})

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
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
