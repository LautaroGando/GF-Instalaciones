import React from "react";
import { statusStyleMap } from "@/utils/installationStatusStyleMap";
import { IStatusStyle } from "@/interfaces/IStatusStyle";
import InstallationCard from "../InstallationCard/InstallationCard";
import { IInstallationCardListProps } from "./types";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const InstallationCardList: React.FC<IInstallationCardListProps> = ({ order }) => {

  return (
    <section className="flex flex-col gap-6 text-gray-600 mb-16">
      {order?.installations.map((installation, i) => {
        const styles: IStatusStyle = statusStyleMap[installation.status];

        return (
          <motion.div
            key={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <InstallationCard styles={styles} installation={installation} />
          </motion.div>
        );
      })}
    </section>
  );
};

export default InstallationCardList;
