"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Subtitle from "@/components/ui/ServicesComponents/Subtitle/Subtitle";
import ServicesInstallationsImages from "@/components/ui/ServicesComponents/DifferentiatingInstallations/ServicesInstallationsImages/ServicesInstallationsImages";
import ServicesImagesModal from "@/components/ui/ServicesComponents/DifferentiatingInstallations/ServicesImagesModal/ServicesImagesModal";
import CallToAction from "@/components/ui/ServicesComponents/DifferentiatingInstallations/CallToAction/CallToAction";
import fargo from "@/public/assets/images/services/moreImages/fargo.jpg";
import trenes from "@/public/assets/images/services/moreImages/trenes.jpg";
import farmaplus from "@/public/assets/images/services/moreImages/farmaplus.jpg";
import bafici from "@/public/assets/images/services/moreImages/bafici.jpg";
import bna from "@/public/assets/images/services/moreImages/bna.jpg";
import gardel from "@/public/assets/images/services/moreImages/gardel.jpg";
import rexona from "@/public/assets/images/services/moreImages/rexona.jpg";
import futbol from "@/public/assets/images/services/moreImages/futbol.jpg";
import policia from "@/public/assets/images/services/moreImages/policia.jpg";
import adidas from "@/public/assets/images/services/moreImages/adidas.jpg";
import buddies from "@/public/assets/images/services/moreImages/buddies.jpg";
import farmacia from "@/public/assets/images/services/moreImages/farmacia.jpg";
import farmaplus1 from "@/public/assets/images/services/moreImages/farmaplus1.jpg";
import frappe from "@/public/assets/images/services/moreImages/frappe.jpg";
import garmin from "@/public/assets/images/services/moreImages/garmin.jpg";
import gobar from "@/public/assets/images/services/moreImages/gobar.jpg";
import messi from "@/public/assets/images/services/moreImages/messi.jpg";
import outlet from "@/public/assets/images/services/moreImages/outlet.jpg";
import piero from "@/public/assets/images/services/moreImages/piero.jpg";
import trenes1 from "@/public/assets/images/services/moreImages/trenes1.jpg";
import trenes2 from "@/public/assets/images/services/moreImages/trenes2.jpg";
import vidriera from "@/public/assets/images/services/moreImages/vidriera.jpg";
import vidriera2 from "@/public/assets/images/services/moreImages/vidriera2.jpg";
import vinology from "@/public/assets/images/services/moreImages/vinology.jpg";

const DifferentiatingInstallations = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
    fargo,
    trenes,
    farmaplus,
    bafici,
    bna,
    gardel,
    rexona,
    futbol,
    policia,
    adidas,
    buddies,
    farmacia,
    farmaplus1,
    trenes1,
    trenes2,
    vinology,
    vidriera,
    vidriera2,
    frappe,
    garmin,
    gobar,
    messi,
    outlet,
    piero,
  ];

  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, amount: 0.4 });

  return (
    <section className="mx-auto py-4 text-center sm:py-6">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Subtitle label="Instalaciones que marcan la diferencia" />
      </motion.div>

      <ServicesInstallationsImages
        showAll={showAll}
        setShowAll={setShowAll}
        setSelectedImage={setSelectedImage}
        images={images}
      />

      <CallToAction />

      <ServicesImagesModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </section>
  );
};

export default DifferentiatingInstallations;
