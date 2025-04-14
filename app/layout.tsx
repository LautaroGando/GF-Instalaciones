import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

const scrollHeaderScript = `
  window.addEventListener("scroll", function () {
    const header = document.getElementById("main-header");
    if (!header) return;

    if (window.scrollY > 0) {
      header.classList.add("scrolledHeader");
    } else {
      header.classList.remove("scrolledHeader");
    }
  });
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          dangerouslySetInnerHTML={{ __html: scrollHeaderScript }}
        ></script>
      </head>
      <body className="bg-bgColor dark:bg-secondaryColor">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
