import { validateCompleteJob } from "@/helpers/validateCompleteJob";
import { ICompleteJob } from "@/interfaces/IJob";
import { completeInstallation } from "@/services/orders";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import React from "react";
import { IFormCompleteInstallationProps } from "./types";

export const FormCompleteInstallation: React.FC<
  IFormCompleteInstallationProps
> = ({ id }: IFormCompleteInstallationProps) => {
  const { handleCloseModal, handleFetchOrders } = useTrackingStore();

  return (
    <Formik<ICompleteJob>
      initialValues={{ files: [], commentary: "" }}
      validate={validateCompleteJob}
      onSubmit={async (values) => {
        await completeInstallation(id, values);
        handleFetchOrders();
        handleCloseModal();
      }}
    >
      {({ setFieldValue }: FormikProps<ICompleteJob>) => (
        <Form className="p-3 bg-bgColor fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-10 max-w-[330px] sm:max-w-[500px]">
          <h2 className="text-primaryColor font-bold text-2xl">
            Completar trabajo:
          </h2>
          <div className="flex flex-col gap-5">
            <div>
              <Field
                className="input min-h-[80px]"
                name="commentary"
                as="textarea"
                placeholder="Comentarios: (opcional)"
              />
            </div>
            <div>
              <input
                className="text-sm sm:text-base"
                type="file"
                name="files"
                multiple
                onChange={(event) => {
                  const files = Array.from(event.currentTarget.files || []);
                  setFieldValue("files", files);
                }}
              />
              <ErrorMessage className="inputError" name="files" component="p" />
            </div>
          </div>
          <div className="flex gap-5 justify-between">
            <button
              onClick={handleCloseModal}
              type="button"
              className="w-[150px] h-[40px] bg-gray-400 text-letterColorLight transition-all duration-300"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-[150px] h-[40px] bg-primaryColor text-letterColorLight transition-all duration-300 border border-primaryColor hover:bg-bgColor hover:text-primaryColor"
            >
              Finalizar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormCompleteInstallation;
