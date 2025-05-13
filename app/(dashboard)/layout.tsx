import Header from "@/components/HeaderComponents/Header";
import clsx from "clsx";
import { Metadata } from "next";
import { ReactNode } from "react";
import "@/app/globals.css";
import Footer from "@/components/FooterComponents/Footer";
import Banner from "@/components/ui/DashboardComponents/Banner/Banner";

export const metadata: Metadata = {
  title: "Perfil de Usuario | GF Instalaciones",
  description:
    "Accede y gestiona tu perfil personal en GF Instalaciones. Actualiza tus datos y mantén tu información siempre actualizada.",
  keywords: [
    "perfil de usuario",
    "dashboard",
    "gestión de cuenta",
    "datos personales",
    "configuración de cuenta",
    "GF Instalaciones",
    "usuario registrado",
    "panel de usuario",
    "actualizar información",
  ],
  icons: {
    icon: "/favicon.ico",
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
