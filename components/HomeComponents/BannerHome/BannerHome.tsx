import Image from "next/image";
import React from "react";
import banner from "@/public/assets/images/banner.svg";

const BannerHome = () => {
  return (
    <div>
      <Image src={banner} alt="Banner" />
    </div>
  );
};

export default BannerHome;
