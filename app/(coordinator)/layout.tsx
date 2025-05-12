import CoordinatorHeader from "@/components/CoordinatorComponents/CoordinatorHeader/CoordinatorHeader";
import clsx from "clsx";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Panel de Coordinador | GF Instalaciones",
  description:
    "Accede al panel de coordinadores de GF Instalaciones. Supervisa y gestiona las instalaciones en curso y realiza seguimientos eficientes.",
  keywords: [
    "panel de coordinador",
    "gestión de instalaciones",
    "asignación de tareas",
    "GF Instalaciones",
    "seguimiento de proyectos",
    "dashboard de coordinador",
    "control de instalaciones",
    "coordinación de equipos",
    "supervisión de trabajos",
    "gestión operativa",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function CoordinatorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-bgColor transition-all duration-300 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor">
      <CoordinatorHeader />
      <main className={clsx("px-3 py-5 w-full sm:px-[20px]")}>{children}</main>
    </div>
  );
}
