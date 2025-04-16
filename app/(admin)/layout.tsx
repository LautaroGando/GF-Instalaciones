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
  title: "GF Admin",
  description: "",
  icons: {
    icon: "/assets/images/header/logo.svg",
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <div className="bg-bgColor transition-all duration-500 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor">
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
