"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { motion } from "motion/react";

export const InfoGraph: React.FC = () => {
  const [isVisibleText, setIsVisibleText] = useState(false);

  const handleVisibleText = () => setIsVisibleText(!isVisibleText);

  return (
    <motion.div
      className="text-center flex flex-col gap-4 items-center lg:flex-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-lg font-semibold sm:text-[22px] lg:text-[26px] lg:text-left xl:text-3xl">
        Instalación Gráfica de Gran Formato
      </h2>
      <p
        className={clsx(
          "text-sm transition-all duration-300 linear overflow-hidden sm:transition-none sm:text-base sm:max-h-full lg:text-left xl:text-lg",
          isVisibleText ? "max-h-[300px]" : "max-h-[80px]"
        )}
      >
        GF es una Empresa Líder en Servicios de Instalación de Grafica Liviana,
        especializada en el montaje de Cartelería liviana, Señalética e
        Instalacion de Films Autoadhesivos. Nos enfocamos en ofrecer soluciones
        completas y personalizadas para proyectos de diferentes escalas, desde
        pequeños trabajos hasta complejas instalaciones industriales. Nuestro
        equipo altamente capacitado trabaja con tecnología moderna y los más
        altos estándares de seguridad y calidad, asegurando que cada proyecto se
        ejecute con precisión y atención a los detalles. En GF, nos
        comprometemos a brindar resultados eficientes que superen las
        expectativas de nuestros clientes.
      </p>
      <button
        onClick={handleVisibleText}
        className="py-1 px-4 bg-primaryColor text-letterColorLight border border-transparent rounded-sm text-sm font-medium transition-all hover:bg-bgColor hover:text-primaryColor hover:border-primaryColor sm:hidden"
      >
        Leer {isVisibleText ? "menos" : "más"}
      </button>
    </motion.div>
  );
};

export default InfoGraph;
