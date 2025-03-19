import React from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import Profile from "./Profile/Profile";
import Banner from "../ui/DashboardComponents/Banner/Banner";
import Newslatter from "./Newslatter/Newslatter";
import { PageProps } from "@/.next/types/app/layout";

export const Dashboard = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <div className="py-5 flex flex-col gap-10 lg:gap-20">
      <DashboardHeader slug={slug} />
      {slug === "profile" ? (
        <Profile />
      ) : slug === "newslatter" ? (
        <Newslatter />
      ) : null}
      <Banner />
    </div>
  );
};

export default Dashboard;
