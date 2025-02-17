import { Metadata } from "next";
import React, { ReactNode } from "react";
import "@/app/globals.css";
import clsx from "clsx";
import AdminHeader from "@/components/AdminComponents/AdminHeader/AdminHeader";

export const metadata: Metadata = {
  title: "GF Admin",
  description: "",
  icons: {
    icon: "/assets/images/header/logo.svg",
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bgColor transition-all duration-500 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor">
      <AdminHeader />
      <main
        className={clsx(
          "px-[15px] py-5 sm:px-[20px] lg:max-w-[960px] lg:mx-auto xl:max-w-[1200px]"
        )}
      >
        {children}
      </main>
    </div>
  );
}
