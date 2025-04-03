import InstallerHeader from "@/components/InstallerComponents/InstallerHeader/InstallerHeader";
import clsx from "clsx";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "GF Instaladores",
  description: "",
  icons: {
    icon: "/assets/images/header/logo.svg",
  },
};

export default function InstallerPanel({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bgColor transition-all duration-500 font-textFont text-secondaryColor flex dark:text-letterColorLight dark:bg-secondaryColor">
      <InstallerHeader />
      <main className={clsx("px-[15px] py-5 h-[100dvh] sm:px-[20px]")}>{children}</main>
    </div>
  );
}
