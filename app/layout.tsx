import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollHeaderEffect } from "@/components/ui/GeneralComponents/ScrollHeaderEffect/ScrollHeaderEffect";

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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bgColor dark:bg-secondaryColor">
        {children}
        <SpeedInsights />
        <ScrollHeaderEffect />
      </body>
    </html>
  );
}
