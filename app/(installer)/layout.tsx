import clsx from "clsx";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "GF Instaladores",
  description: "",
  icons: {
    icon: "/assets/images/header/logo.svg",
  },
};

export default function InstallerPanel({ children }: { children: ReactNode }) {
  return (
    <div className="bg-bgColor transition-all duration-500 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor">
      <main className={clsx("px-[15px] py-5 sm:px-[20px] lg:pl-[150px]")}>
        {children}
      </main>
    </div>
  );
}
