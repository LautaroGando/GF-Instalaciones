import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GF Instalaciones | Instalaciones Gráficas Profesionales",
  description:
    "Especialistas en instalaciones gráficas de gran formato en todo el país. Cartelería, señalética, stands y más. Más de 28 años de experiencia en soluciones visuales.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7305692812605608"
          crossOrigin="anonymous"
        ></script>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bgColor overflow-x-hidden dark:bg-secondaryColor">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
