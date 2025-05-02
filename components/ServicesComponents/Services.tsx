import React from "react";
import InstallationBanner from "./InstallationBanner/InstallationBanner";
import ServicesList from "./ServicesList/ServicesList";

export const Services: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <InstallationBanner />
      <ServicesList />
    </div>
  );
};

export default Services;
