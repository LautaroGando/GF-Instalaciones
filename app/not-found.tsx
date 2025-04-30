"use client";
import "@/app/globals.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary text-primaryColor px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <h1 className="text-8xl text-center font-black tracking-tight">
          Oophs! 404
        </h1>
        <p className="max-w-md text-center text-lg text-primary/70">
          No pudimos encontrar la página que estás buscando. Es posible que haya
          sido movida o que nunca haya existido.
        </p>
        <Link
          href="/"
          className="mt-4 flex gap-3 items-center transition-all duration-300 hover:gap-5 active:scale-95"
        >
          <FontAwesomeIcon
            className="text-[20px] w-[20px]"
            icon={faArrowLeft}
            width={20}
          />
          Volver al Inicio
        </Link>
      </motion.div>
    </div>
  );
}
