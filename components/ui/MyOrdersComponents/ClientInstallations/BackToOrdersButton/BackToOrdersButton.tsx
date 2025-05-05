import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BackToOrdersButton = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
      }}
      initial="hidden"
      animate="visible"
      className="mb-4 flex"
    >
      <Link
        href="/my-orders"
        className="inline-flex items-center gap-2 mb-3 rounded-md border border-primaryColor px-4 py-2 text-primaryColor text-sm font-semibold transition-all hover:bg-primaryColor/80 hover:text-white hover:shadow-md active:bg-primaryColor"
      >
        ← Volver
      </Link>
    </motion.div>
  );
};

export default BackToOrdersButton;
