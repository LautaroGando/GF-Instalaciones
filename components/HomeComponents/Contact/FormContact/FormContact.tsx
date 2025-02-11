"use client";
import React from "react";
import contactImg from "@/public/assets/ilustrations/home/contact.svg";
import Image from "next/image";
import { Form, Formik, FormikProps } from "formik";
import { IContact } from "@/interfaces/IContact";
import { formContactData } from "@/data/FormContactData/form-contact-data";
import InputField from "@/components/ui/InputField/InputField";
import type { IFormContactData } from "@/data/FormContactData/types";
import { validateContact } from "@/helpers/validateContact";

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
        initialValues={{ name: "", surname: "", email: "", message: "" }}
        validate={validateContact}
        onSubmit={() => {}}
      >
        {({ errors, touched, values }: FormikProps<IContact>) => (
          <Form className="w-full flex flex-col gap-[14px] max-w-[496px]">
            <div className="flex flex-col gap-5 h-[500px]">
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
              className="bg-primaryColor text-letterColorLight font-titleFont transition-all duration-300 border border-transparent text-lg font-bold h-[52px] rounded-tl-[20px] rounded-br-[20px] hover:bg-transparent hover:text-primaryColor hover:border-primaryColor sm:rounded-tl-[30px] sm:rounded-br-[30px] sm:h-[60px] sm:text-xl"
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
