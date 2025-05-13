"use client";

import React, { useRef } from "react";
import contactImg from "@/public/assets/ilustrations/home/contact.svg";
import Image from "next/image";
import { Form, Formik, FormikProps } from "formik";
import { IContact } from "@/interfaces/IContact";
import { formContactData } from "@/data/FormContactData/form-contact-data";
import type { IFormContactData } from "@/data/FormContactData/types";
import { validateContact } from "@/helpers/validateContact";
import InputField from "@/components/ui/HomeComponents/InputField/InputField";
import { motion, useInView } from "motion/react";

export const FormContact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          }}
          validate={validateContact}
          onSubmit={() => {}}
        >
          {({ errors, touched, values }: FormikProps<IContact>) => (
            <Form className="flex flex-col gap-3">
              <motion.h3
                className="text-primaryColor font-semibold text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Contacto:
              </motion.h3>

              <motion.div
                className="flex flex-col gap-7 sm:gap-2"
                initial="hidden"
                animate={isInView && "show"}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.4,
                    },
                  },
                }}
              >
                {formContactData.map((field: IFormContactData, i: number) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: "easeOut" },
                      },
                    }}
                  >
                    <InputField<IContact>
                      {...field}
                      errors={errors}
                      touched={touched}
                      values={values}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                type="submit"
                className="bg-primaryColor mt-5 text-letterColorLight transition-all duration-300 border border-transparent text-lg font-medium w-[200px] mx-auto h-[40px] rounded-sm hover:bg-primaryColorHover"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              >
                Enviar
              </motion.button>
            </Form>
          )}
        </Formik>
      </motion.div>
    </motion.div>
  );
};

export default FormContact;
