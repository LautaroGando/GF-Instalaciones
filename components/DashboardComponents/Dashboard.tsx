import React from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import Profile from "./Profile/Profile";
import Newslatter from "./Newslatter/Newslatter";
import { PageProps } from "@/.next/types/app/layout";

export const Dashboard = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <div className="py-10 flex flex-col gap-10 mt-44 lg:gap-20">
      <DashboardHeader slug={slug} />
      {slug === "profile" ? (
        <Profile />
      ) : slug === "newslatter" ? (
        <Newslatter />
      ) : null}
    </div>
  );
};

export default Dashboard;
