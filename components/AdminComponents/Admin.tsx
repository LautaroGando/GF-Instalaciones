"use client";
import React from "react";
import Panel from "./Panel/Panel";
import { usePathname } from "next/navigation";

export const Admin: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      {
        pathname === '/admin/panel' ? <Panel /> : null
      }
    </div>
  );
};

export default Admin;
