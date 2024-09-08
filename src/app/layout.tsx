import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Desroteiriza - A Cada Lugar, Um Novo Olhar",
  description:
    "Um convite para explorar o extraordinário e revelar as maravilhas escondidas do Espírito Santo.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt_br" className={`${GeistSans.variable}`}>
      <body>
        <Toaster richColors />
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
