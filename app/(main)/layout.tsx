import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/HeaderComponents/Header";
import BannerHome from "@/components/HomeComponents/BannerHome/BannerHome";
import clsx from "clsx";
import Footer from "@/components/FooterComponents/Footer";
import BlogBanner from "@/components/ui/BlogComponents/BlogBanner/BlogBanner";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "GF Instalaciones",
  description: "",
  icons: {
    icon: "/assets/images/header/logo.svg",
  },
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={clsx(
        "bg-bgColor transition-all duration-300 font-textFont text-secondaryColor dark:text-letterColorLight dark:bg-secondaryColor"
      )}
    >
      <Header />
      <BannerHome />
      <BlogBanner />
      <main className="px-[15px] mt-20 sm:px-[20px] lg:max-w-[960px] lg:mx-auto xl:max-w-[1200px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
