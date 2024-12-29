import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Desroteiriza - A Cada Lugar, Um Novo Olhar",
  description:
    "Um convite para explorar o extraordinário e revelar as maravilhas escondidas do Espírito Santo.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt_br" className={`${inter.variable}`}>
      <body className="">
        <Toaster richColors />
        <div className="min-h-dvh">{children}</div>
      </body>
    </html>
  );
}
