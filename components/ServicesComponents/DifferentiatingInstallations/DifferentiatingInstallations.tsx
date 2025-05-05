"use client";
import React, { useState } from "react";
import image from "@/public/assets/images/services/auto.png";
import Subtitle from "@/components/ui/ServicesComponents/Subtitle/Subtitle";
import ServicesInstallationsImages from "@/components/ui/ServicesComponents/DifferentiatingInstallations/ServicesInstallationsImages/ServicesInstallationsImages";
import ServicesImagesModal from "@/components/ui/ServicesComponents/DifferentiatingInstallations/ServicesImagesModal/ServicesImagesModal";
import CallToAction from "@/components/ui/ServicesComponents/DifferentiatingInstallations/CallToAction/CallToAction";

const DifferentiatingInstallations = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = Array(9).fill(image);

  return (
    <section className="mx-auto py-4 text-center sm:py-6">
      <Subtitle label="Instalaciones que marcan la diferencia" />

      <ServicesInstallationsImages
        showAll={showAll}
        setShowAll={setShowAll}
        setSelectedImage={setSelectedImage}
        images={images}
      />

      <CallToAction />

      <ServicesImagesModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
    </section>
  );
};

export default DifferentiatingInstallations;
