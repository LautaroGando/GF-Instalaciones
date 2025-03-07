import {
  formSignUpData,
  formSignUpInstallerData,
} from "@/data/FormSignUpData/form-signup-data";
import { IFormSignUpData } from "@/data/FormSignUpData/types";
import { IUserSignUpInstaller } from "@/interfaces/IAuth";
import { Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import { motion } from "motion/react";
import { validateSignUpInstaller } from "@/helpers/validateSignUpInstaller";
import InputAuthField from "@/components/ui/AuthComponents/InputAuthField/InputAuthField";
import ButtonAuth from "@/components/ui/AuthComponents/ButtonAuth/ButtonAuth";
import { signUpInstaller } from "@/services/auth";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";

export const FormInstaller: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center w-full gap-5 mx-auto"
    >
      <h2 className="text-lg tracking-[3px] text-secondaryColor self-start dark:text-letterColorLight">
        REGISTRARSE
      </h2>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          birthDate: "",
          idNumber: "",
          country: "",
          location: "",
          address: "",
          coverage: "+54",
          phone: "",
          password: "",
          repeatPassword: "",
          taxCondition: "",
          queries: "",
          hasPersonalAccidentInsurance: false,
          canWorkAtHeight: false,
          canTensionFrontAndBackLonas: false,
          canInstallCorporealSigns: false,
          canInstallFrostedVinyl: false,
          canInstallVinylOnWallsOrGlass: false,
          canDoCarWrapping: false,
          hasOwnTransportation: false,
        }}
        validate={validateSignUpInstaller}
        onSubmit={async (values, { resetForm }) => {
          setIsLoading(true);
          const formattedValues = Object.fromEntries(
            Object.entries(values).map(([key, value]) => [
              key,
              value === "si" ? true : value === "no" ? false : value,
            ])
          ) as unknown as IUserSignUpInstaller;
          await signUpInstaller({
            ...formattedValues,
            taxCondition: values.taxCondition.toUpperCase(),
          });
          setIsLoading(false);
          resetForm();
        }}
      >
        {({ errors, touched }: FormikProps<IUserSignUpInstaller>) => (
          <Form className="w-full flex flex-col gap-5">
            <div className="flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:gap-10">
              {formSignUpData.map((field: IFormSignUpData, i: number) => (
                <InputAuthField
                  key={i}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  icon={field.icon}
                  color="black"
                  select={field.select}
                  options={field.options}
                  isPhone={field.isPhone}
                  errors={errors[field.name as keyof IUserSignUpInstaller]}
                  touched={touched[field.name as keyof IUserSignUpInstaller]}
                  required={field.required}
                />
              ))}
            </div>
            <h2 className="text-lg tracking-[3px] text-secondaryColor self-center border-t border-primaryColor w-[200px] text-center py-10 dark:text-letterColorLight">
              INSTALADOR
            </h2>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-[1.6fr_2fr] lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col gap-5">
                {formSignUpInstallerData
                  .filter((field) => field.type !== "radio")
                  .map((field: IFormSignUpData, i: number) => (
                    <InputAuthField
                      key={i}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      icon={field.icon}
                      color="black"
                      select={field.select}
                      textarea={field.textarea}
                      options={field.options}
                      isPhone={field.isPhone}
                      errors={errors[field.name as keyof IUserSignUpInstaller]}
                      touched={
                        touched[field.name as keyof IUserSignUpInstaller]
                      }
                      required={field.required}
                    />
                  ))}
              </div>
              <div className="flex flex-col gap-5">
                {formSignUpInstallerData
                  .filter((field) => field.type === "radio")
                  .map((field: IFormSignUpData, i: number) => (
                    <InputAuthField
                      key={i}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      icon={field.icon}
                      color="black"
                      options={field.options}
                      errors={errors[field.name as keyof IUserSignUpInstaller]}
                      touched={
                        touched[field.name as keyof IUserSignUpInstaller]
                      }
                      required={field.required}
                    />
                  ))}
                <div className="w-full h-[1px] bg-primaryColor"></div>
              </div>
            </div>
            {isLoading ? (
              <div className="mt-10">
                <Loading theme="light" />
              </div>
            ) : (
              <ButtonAuth label="CREAR CUENTA" form="signUp" />
            )}
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default FormInstaller;
