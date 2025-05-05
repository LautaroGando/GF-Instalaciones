import React from "react";
import InstallationBanner from "./InstallationBanner/InstallationBanner";
import ServicesList from "./ServicesList/ServicesList";
import WhyChooseUsSection from "./WhyChooseUsSection/WhyChooseUsSection";
import DifferentiatingInstallations from "./DifferentiatingInstallations/DifferentiatingInstallations";

export const Services: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <InstallationBanner />
      <ServicesList />
      <WhyChooseUsSection />
      <DifferentiatingInstallations />
    </div>
  );
};

export default Services;
