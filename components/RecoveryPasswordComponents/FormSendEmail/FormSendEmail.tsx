"use client";
import { useRecoveryPasswordStore } from "@/store/RecoveryPasswordStore/recoveryPasswordStore";
import { Field, Form, Formik } from "formik";
import React from "react";

export const FormSendEmail: React.FC = () => {
  const { modal, handleCloseModal } = useRecoveryPasswordStore();

  return (
    <>
      {modal && (
        <div
          onClick={handleCloseModal}
          className="w-full h-[100vh] bg-secondaryColor/80 fixed top-0 left-0 z-50 flex items-center justify-center"
        >
          <Formik
            initialValues={{ email: "" }}
            validate={() => {}}
            onSubmit={() => {}}
          >
            <Form className="w-auto bg-bgColor p-5 flex flex-col gap-5 rounded-lg border-t-[10px] border-primaryColor items-center">
              <h2 className="text-primaryColor text-xl font-semibold">
                Verificar correo electrónico:
              </h2>
              <Field
                className="input"
                name="email"
                type="email"
                placeholder="Correo electrónico:"
              />
              <div className="flex flex-col items-center w-full gap-2 xl:flex-row xl:justify-between">
                <button
                  className="bg-gray-400 text-letterColorLight w-full h-[40px] mt-4 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gray-500 xl:w-[240px]"
                  onClick={() => handleCloseModal()}
                  type="button"
                >
                  Cancelar
                </button>
                <button
                  className="bg-primaryColor text-letterColorLight w-full h-[40px] mt-4 px-3 py-2 rounded-md transition-all duration-300 hover:bg-primaryColorHover xl:w-[240px]"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};

export default FormSendEmail;
