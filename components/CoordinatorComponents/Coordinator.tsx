import { PageProps } from "@/.next/types/app/layout";
import React from "react";
import Installation from "../CoordinatorComponents/Installation/Installation";
import History from "../CoordinatorComponents/History/History";

export const Installer = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <div>
      {slug === "installations" ? (
        <Installation />
      ) : (
        slug === "history" && <History />
      )}
    </div>
  );
};

export default Installer;
