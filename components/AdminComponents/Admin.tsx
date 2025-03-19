"use client";
import React from "react";
import Panel from "./Panel/Panel";
import { usePathname } from "next/navigation";
import Users from "./Users/Users";
import Tracking from "./Tracking/Tracking";
import Installations from "./Installations/Installations";

export const Admin: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <div>
      {pathname === "/admin/panel" ? (
        <Panel />
      ) : pathname === "/admin/users" ? (
        <Users />
      ) : pathname === "/admin/tracking" ? (
        <Tracking />
      ) : pathname === "/admin/tracking/installations" ? (
        <Installations />
      ) : null}
    </div>
  );
};

export default Admin;
