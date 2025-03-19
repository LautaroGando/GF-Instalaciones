import React from "react";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import Profile from "./Profile/Profile";
import Banner from "../ui/DashboardComponents/Banner/Banner";
import Newslatter from "./Newslatter/Newslatter";

interface IDashboardProps {
  params: {
    slug: string;
  };
}

export const Dashboard = async ({ params }: IDashboardProps) => {
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
