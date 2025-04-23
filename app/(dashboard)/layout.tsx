import Header from "@/components/HeaderComponents/Header";
import clsx from "clsx";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/app/globals.css";
import Footer from "@/components/FooterComponents/Footer";
import Banner from "@/components/ui/DashboardComponents/Banner/Banner";

export const metadata: Metadata = {
  title: "GF Perfil",
  description: "",
  icons: {
    icon: "/assets/images/header/logo.svg",
  },
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={clsx(
        "bg-bgColor transition-all duration-300 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor"
      )}
    >
      <Header />
      <main className="px-[15px] mt-20 sm:px-[20px] lg:max-w-[960px] lg:mx-auto xl:max-w-[1200px]">
        {children}
      </main>
      <Banner />
      <Footer />
    </div>
  );
}
