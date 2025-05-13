import { Metadata } from "next";
import React, { ReactNode, Suspense } from "react";
import "@/app/globals.css";
import clsx from "clsx";
import AdminHeader from "@/components/AdminComponents/AdminHeader/AdminHeader";
import TextModal from "@/components/ui/AdminComponents/TextModal/TextModal";
import TrackingCreateModal from "@/components/ui/AdminComponents/CreateModal/TrackingCreateModal/TrackingCreateModal";
import InstallationsCreateModal from "@/components/ui/AdminComponents/CreateModal/InstallationsCreateModal/InstallationsCreateModal";
import TrackingEditModal from "@/components/ui/AdminComponents/EditModal/TrackingEditModal/TrackingEditModal";
import InstallationEditModal from "@/components/ui/AdminComponents/EditModal/InstallationsEditModal/InstallationsEditModal";
import InstallationNoteModal from "@/components/ui/AdminComponents/InstallationNoteModal/InstallationNoteModal";

export const metadata: Metadata = {
  title: "Panel de Administración | GF Instalaciones",
  description:
    "Accede al panel de administración de GF Instalaciones para gestionar usuarios, instalaciones y datos de forma eficiente y segura.",
  keywords: [
    "panel de administración",
    "gestión de usuarios",
    "administración de instalaciones",
    "datos",
    "dashboard administrativo",
    "GF Instalaciones",
    "control de acceso",
    "seguridad de datos",
    "herramientas administrativas",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <div className="bg-bgColor transition-all duration-300 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor">
        <AdminHeader />
        <TextModal />
        <TrackingCreateModal />
        <TrackingEditModal />
        <InstallationsCreateModal />
        <InstallationEditModal />
        <InstallationNoteModal />
        <main className={clsx("px-[15px] py-5 sm:px-[20px] lg:pl-[150px]")}>
          {children}
        </main>
      </div>
    </Suspense>
  );
}
