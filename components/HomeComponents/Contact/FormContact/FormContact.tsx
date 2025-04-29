"use client";
import React from "react";
import contactImg from "@/public/assets/ilustrations/home/contact.svg";
import Image from "next/image";
import { Form, Formik, FormikProps } from "formik";
import { IContact } from "@/interfaces/IContact";
import { formContactData } from "@/data/FormContactData/form-contact-data";
import type { IFormContactData } from "@/data/FormContactData/types";
import { validateContact } from "@/helpers/validateContact";
import InputField from "@/components/ui/HomeComponents/InputField/InputField";

export const FormContact: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 items-center lg:flex-row-reverse lg:justify-between">
      <Image
        className="w-[200px] sm:w-[300px] lg:w-[370px] xl:w-[400px]"
        src={contactImg}
        alt="Imagen de contacto"
        priority
      />
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
          <Form className="w-full flex flex-col gap-3 max-w-[496px]">
            <h3 className="text-primaryColor font-semibold text-2xl">
              Contacto:
            </h3>
            <div className="flex flex-col gap-7 sm:gap-2">
              {formContactData.map((field: IFormContactData, i: number) => (
                <InputField<IContact>
                  key={i}
                  {...field}
                  errors={errors}
                  touched={touched}
                  values={values}
                />
              ))}
            </div>
            <button
              type="submit"
              className="bg-primaryColor mt-5 text-letterColorLight transition-all duration-300 border border-transparent text-lg font-medium w-[200px] mx-auto h-[40px] rounded-sm hover:bg-primaryColorHover"
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormContact;
