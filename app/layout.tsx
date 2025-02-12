import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import BannerHome from "@/components/HomeComponents/BannerHome/BannerHome";
import clsx from "clsx";
import Footer from "@/components/FooterComponents/Footer";
import BlogBanner from "@/components/ui/BlogBanner/BlogBanner";

export const metadata: Metadata = {
  title: "GF Instalaciones",
  description: "",
  icons: {
    icon: "/assets/images/header/logo.svg",
  },
};

const themeScript = `
  (function() {
    try {
      let theme = localStorage.getItem('theme');
      let systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      let isDark = theme === 'dark' || (!theme && systemPrefersDark);
      
      if (isDark) document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('theme-loading');
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={clsx(
          "bg-bgColor transition-all duration-500 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor"
        )}
      >
        <Header />
        <BannerHome />
        <BlogBanner />
        <main className="px-[15px] sm:px-[20px] lg:max-w-[960px] lg:mx-auto xl:max-w-[1200px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
