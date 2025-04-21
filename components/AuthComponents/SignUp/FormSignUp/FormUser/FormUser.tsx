import { formSignUpData } from "@/data/FormSignUpData/form-signup-data";
import { IFormSignUpData } from "@/data/FormSignUpData/types";
import { validateSignUp } from "@/helpers/validateSignUp";
import { IUserSignUp } from "@/interfaces/IAuth";
import { useAuthStore } from "@/store/AuthStore/authStore";
import clsx from "clsx";
import { Form, Formik, FormikProps } from "formik";
import React, { useState } from "react";
import { motion } from "motion/react";
import InputAuthField from "@/components/ui/AuthComponents/InputAuthField/InputAuthField";
import ButtonAuth from "@/components/ui/AuthComponents/ButtonAuth/ButtonAuth";
import { signUpUser } from "@/services/auth";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { useThemeStore } from "@/store/ThemeStore/themeStore";

export const FormUser: React.FC = () => {
  const { view } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { isDark } = useThemeStore();

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className={clsx(
        "w-full flex flex-col items-center gap-5 mx-auto max-w-[410px]",
        view === "signIn" && "h-[550px] overflow-hidden"
      )}
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
        }}
        validate={validateSignUp}
        onSubmit={async (values, { resetForm }) => {
          setIsLoading(true);
          await signUpUser(values, isDark ? "#000000" : "#FAFAFA");
          setIsLoading(false);
          resetForm();
        }}
      >
        {({ errors, touched }: FormikProps<IUserSignUp>) => (
          <Form className="w-full flex flex-col gap-5">
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
                errors={errors[field.name as keyof IUserSignUp]}
                touched={touched[field.name as keyof IUserSignUp]}
                required={field.required}
              />
            ))}
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

export default FormUser;
