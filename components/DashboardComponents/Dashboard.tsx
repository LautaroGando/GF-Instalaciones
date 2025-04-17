import React from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import Profile from "./Profile/Profile";
import Banner from "../ui/DashboardComponents/Banner/Banner";
import Newslatter from "./Newslatter/Newslatter";
import { PageProps } from "@/.next/types/app/layout";

export const Dashboard = async ({ params }: PageProps) => {
  const { slug } = await params;

  return (
    <div className="pt-10 h-[1187.5px] left-0 right-0 flex flex-col gap-10 mt-44 sm:h-[987.5px] lg:h-[771.5px] lg:gap-20">
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
