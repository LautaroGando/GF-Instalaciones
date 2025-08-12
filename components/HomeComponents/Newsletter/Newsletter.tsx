"use client";

import Image from "next/image";
import Script from "next/script";
import React, { useEffect, useRef, useState } from "react";
import newssletterImg from "@/public/assets/ilustrations/home/newsletter.svg";
import HomeTitle from "@/components/ui/HomeComponents/HomeTitle/HomeTitle";
import { motion, useInView } from "motion/react";

interface Hbspt {
  forms: {
    create: (options: {
      portalId: string;
      formId: string;
      region?: string;
      target: string;
    }) => void;
  };
}

declare global {
  interface Window {
    hbspt?: Hbspt;
  }
}

const HUBSPOT_PORTAL_ID = "47831539";
const HUBSPOT_FORM_ID = "946e115e-498c-4e6a-9ecb-4b400df2a0da";
const HUBSPOT_REGION = "na1"; // opcional en la mayoría de integraciones
const HUBSPOT_SCRIPT_SRC = "https://js.hsforms.net/forms/v2.js";

const Newsletter: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // función que intenta crear el form si hbspt está disponible
  const tryCreateForm = () => {
    try {
      if (window.hbspt?.forms) {
        window.hbspt.forms.create({
          portalId: HUBSPOT_PORTAL_ID,
          formId: HUBSPOT_FORM_ID,
          region: HUBSPOT_REGION,
          target: "#hubspotNewsletter",
        });
        setLoading(false);
        setError(null);
        return true;
      }
    } catch (err) {
      console.error("HubSpot form error:", err);
    }
    return false;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Si ya está disponible, crear y salir
    if (tryCreateForm()) return;

    // Polling con retries (cada 300ms hasta 20 intentos -> 6s max)
    let attempts = 0;
    const maxAttempts = 20;
    const interval = 300;
    const poll = setInterval(() => {
      attempts++;
      if (tryCreateForm()) {
        clearInterval(poll);
      } else if (attempts >= maxAttempts) {
        clearInterval(poll);
        setLoading(false);
        setError("No se pudo inicializar el formulario de HubSpot (timeout).");
        console.error("HubSpot loaded but window.hbspt not available after retries.");
      }
    }, interval);

    return () => {
      clearInterval(poll);
    };
  }, []);

  return (
    <section className="flex flex-col items-center">
      <HomeTitle text="" justLine />

      {/* Next.js Script: carga controlada en cliente */}
      <Script
        id="hs-forms-script"
        src={HUBSPOT_SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={() => {
          // onLoad sucede cuando el archivo es descargado; la lib puede inicializar async.
          // Delegate a useEffect que hace polling para instanciar el form.
          console.debug("HubSpot script onLoad fired.");
        }}
        onError={(e) => {
          console.error("Error loading HubSpot script", e);
          setLoading(false);
          setError("Error cargando el script de HubSpot.");
        }}
      />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView && "show"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.2,
            },
          },
        }}
        className="mt-14 w-full flex flex-col items-center justify-center gap-y-4 lg:flex-row lg:justify-between"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <Image
            src={newssletterImg}
            alt="Newsletter imagen"
            className="w-[180px] mb-4 sm:w-[200px] sm:mb-7 lg:w-[300px] xl:w-[400px]"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-y-4 lg:items-start"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h3
            className="flex flex-col text-center text-[20px] font-bold sm:text-[26px] lg:text-left xl:text-[28px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <span>Suscríbete a nuestro</span> <span>newsletter</span>
          </motion.h3>

          <motion.p
            className="flex flex-col text-center text-[14px] sm:text-[16px] lg:text-left xl:text-[18px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <span className="hidden sm:block">
              Déjanos tu mail para recibir novedades, ofertas exclusivas y
            </span>
            <span className="hidden sm:block">
              actualizaciones de nuestros proyectos.
            </span>
            <span className="sm:hidden">
              Déjanos tu mail para recibir novedades, ofertas exclusivas y
              actualizaciones de nuestros proyectos.
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col justify-center w-full h-[125px] max-w-[530px] rounded-tl-[30px] rounded-br-[30px] bg-gradient-to-r from-[#A79351]/70 to-[#A79351]/100 px-6 sm:h-[160px] xl:w-[580px] xl:h-[200px] xl:rounded-tl-[50px] xl:rounded-br-[50px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div id="hubspotNewsletter" className="w-full" aria-live="polite">
              {loading && (
                <div className="flex items-center justify-center h-[56px]">
                  <span className="text-white">Cargando formulario…</span>
                </div>
              )}

              {error && (
                <div className="flex items-center justify-center h-[56px]">
                  <span className="text-white">Error: {error}</span>
                </div>
              )}

              {/* HubSpot inyectará el formulario aquí */}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
