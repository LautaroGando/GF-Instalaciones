"use client";
import ButtonUnsubscribeNewslatter from "@/components/ui/DashboardComponents/ButtonUnsubscribeNewslatter/ButtonUnsubscribeNewslatter";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { useUserData } from "@/hooks/useUserData";
import React from "react";

export const Newslatter: React.FC = () => {
  const { user } = useUserData();

  if (!user)
    return (
      <div>
        <Loading theme="light" />
      </div>
    );

  const userInfo = "user" in user ? user.user : user;

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl text-center">¿Qué es nuestro Newsletter?</h2>
      <p className="font-light max-w-[700px] mx-auto">
        Nuestro newsletter te mantiene informado sobre las últimas novedades en
        instalaciones gráficas, consejos útiles, noticias relevantes del sector
        y promociones exclusivas. Al suscribirte, recibirás contenido de valor
        directamente en tu bandeja de entrada, sin necesidad de buscar
        información por otros medios.
      </p>
      <p className="font-light max-w-[700px] mx-auto">
        Sabemos que la información puede ser abrumadora, por eso nos aseguramos
        de enviarte solo lo más importante y relevante para que estés siempre
        actualizado sin sentirte saturado.
      </p>
      <h3 className="text-center max-w-max mx-auto border-b border-primaryColor">
        Actualmente estás suscrito con:{" "}
        <span className="font-medium text-primaryColor">{userInfo.email}</span>
      </h3>
      <p className="text-xs font-light text-center max-w-[300px] mx-auto">
        Si en algún momento decides que ya no deseas recibir nuestras
        actualizaciones, puedes darte de baja con un solo clic.
      </p>
      <ButtonUnsubscribeNewslatter />
    </div>
  );
};

export default Newslatter;
