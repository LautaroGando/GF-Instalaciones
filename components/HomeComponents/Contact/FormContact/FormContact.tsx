"use client";

import React, { useRef, useEffect, useState } from "react";
import contactImg from "@/public/assets/ilustrations/home/contact.svg";
import Image from "next/image";
import { motion, useInView } from "motion/react";

interface HubspotForms {
  create: (options: {
    portalId: string;
    formId: string;
    region?: string;
    target: string;
    onFormReady?: ($form: HTMLElement) => void;
    [key: string]: unknown;
  }) => void;
}

const HUBSPOT_PORTAL_ID = "47831539";
const HUBSPOT_FORM_ID = "a4f89e0a-d480-4ce2-b1a4-68e827fe01ef";
const HUBSPOT_REGION = "na1";

export const FormContact: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Solo ejecutar en cliente
    if (typeof window === "undefined") return;

    const existing = document.getElementById("hs-forms-script");
    let addedScript = false;

    const createHubspotForm = () => {
      try {
        const formsApi = window.hbspt?.forms as HubspotForms | undefined;

        if (formsApi) {
          formsApi.create({
            portalId: HUBSPOT_PORTAL_ID,
            formId: HUBSPOT_FORM_ID,
            region: HUBSPOT_REGION,
            target: "#hubspotForm",
            onFormReady: ($form: HTMLElement) => {
              $form.querySelectorAll("label").forEach((lbl) => {
                (lbl as HTMLElement).style.color = "#A0A0A0";
              });
            },
          });
          setLoading(false);
        }
      } catch (err) {
        console.error("HubSpot form error:", err);
        setLoading(false);
      }
    };

    if (existing) {
      // Si el script ya está, solo intentamos crear el form
      createHubspotForm();
    } else {
      // Añadimos el script al body
      const s = document.createElement("script");
      s.id = "hs-forms-script";
      s.src = "//js.hsforms.net/forms/embed/v2.js";
      s.type = "text/javascript";
      s.charset = "utf-8";
      s.onload = () => {
        createHubspotForm();
      };
      s.onerror = () => {
        console.error("Error loading HubSpot script");
        setLoading(false);
      };
      document.body.appendChild(s);
      addedScript = true;
    }

    // Limpieza: si fuimos nosotros quienes añadimos el script lo removemos al desmontar
    return () => {
      if (addedScript) {
        const el = document.getElementById("hs-forms-script");
        if (el?.parentNode) el.parentNode.removeChild(el);
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-10 items-center lg:flex-row-reverse lg:justify-between"
      initial="hidden"
      animate={isInView && "show"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 30 },
          show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
          },
        }}
      >
        <Image
          className="w-[200px] sm:w-[300px] lg:w-[370px] xl:w-[400px]"
          src={contactImg}
          alt="Imagen de contacto"
          priority
        />
      </motion.div>

      <motion.div
        className="w-full flex flex-col gap-3 max-w-[496px]"
        variants={{
          hidden: { opacity: 0, x: -30 },
          show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
      >
        <motion.h3
          className="text-primaryColor font-semibold text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Contacto:
        </motion.h3>

        {/* Contenedor donde HubSpot inyecta el formulario */}
        <div
          id="hubspotForm"
          className="min-h-[180px] flex items-center justify-center"
          aria-live="polite"
        >
          {loading && <span>Cargando formulario…</span>}
        </div>

        {/* Si quieres mostrar algo debajo del form (botones, nota, etc.), agrégalo aquí */}
      </motion.div>
    </motion.div>
  );
};

export default FormContact;
