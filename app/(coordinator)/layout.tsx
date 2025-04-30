import CoordinatorHeader from "@/components/CoordinatorComponents/CoordinatorHeader/CoordinatorHeader";
import clsx from "clsx";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "GF Coordinadores",
  description: "",
  icons: {
    icon: "/assets/images/header/logo.svg",
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
