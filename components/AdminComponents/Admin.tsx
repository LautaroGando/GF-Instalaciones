"use client";
import React from "react";
import Panel from "./Panel/Panel";
import { usePathname } from "next/navigation";
import Users from "./Users/Users";

export const Admin: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/admin/panel" ? (
        <Panel />
      ) : pathname === "/admin/users" ? (
        <Users />
      ) : null}
    </div>
  );
};

export default Admin;
