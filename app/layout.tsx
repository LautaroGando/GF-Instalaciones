import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "GF Instalaciones",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={clsx("bg-bgColor font-textFont")}>
        <Header />
        <main className="px-[12px] sm:px-[20px] lg:max-w-[960px] lg:mx-auto xl:max-w-[1200px]">{children}</main>
      </body>
    </html>
  );
}
