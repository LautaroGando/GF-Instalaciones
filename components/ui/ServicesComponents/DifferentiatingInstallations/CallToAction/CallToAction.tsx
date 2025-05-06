"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ButtonPrice from "../../ButtonPrice/ButtonPrice";

const CallToAction: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      className="mt-10 flex flex-col items-center gap-6 sm:gap-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
        hidden: {},
      }}
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-primaryColor text-xl sm:text-2xl lg:text-3xl font-semibold text-center max-w-[700px] leading-snug"
      >
        ¿Listo para instalar tu proyecto con profesionales?
      </motion.h2>

      <motion.p
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-secondaryColor/70 text-sm sm:text-base tracking-wide max-w-[500px] leading-relaxed text-center dark:text-white"
      >
        Contá con un equipo que responde donde y cuando lo necesitás.
      </motion.p>

      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ButtonPrice />
      </motion.div>
    </motion.div>
  );
};

export default CallToAction;
