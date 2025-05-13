import InstallerHeader from "@/components/InstallerComponents/InstallerHeader/InstallerHeader";
import clsx from "clsx";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Panel de Instalaciones | GF Instalaciones",
  description:
    "Accede al panel de instalaciones de GF Instalaciones. Revisa, gestiona y actualiza las tareas asignadas con eficiencia y precisión.",
  keywords: [
    "panel de instalaciones",
    "gestión de instalaciones",
    "instalador gráfico",
    "tareas asignadas",
    "historial de instalaciones",
    "dashboard instalador",
    "GF Instalaciones",
    "seguimiento de proyectos",
    "actualización de estado",
    "instalaciones gráficas",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function InstallerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bgColor transition-all duration-300 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor">
      <InstallerHeader />
      <main className={clsx("px-3 py-5 w-full sm:px-[20px]")}>{children}</main>
    </div>
  );
}
