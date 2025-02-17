import { formSignInData } from "@/data/FormSignInData/form-signin-data";
import { IFormSignInData } from "@/data/FormSignInData/types";
import { IUserSignIn } from "@/interfaces/IAuth";
import { Form, Formik, FormikProps } from "formik";
import React from "react";
import { motion } from "motion/react";
import InputAuthField from "@/components/ui/AuthComponents/InputAuthField/InputAuthField";
import ButtonAuth from "@/components/ui/AuthComponents/ButtonAuth/ButtonAuth";

export const FormSignIn: React.FC = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center w-full gap-5 max-w-[410px]"
    >
      <h2 className="text-lg tracking-[3px] text-letterColorLight self-start dark:text-primaryColor">
        INGRESAR
      </h2>
      <Formik
        initialValues={{ emailSignIn: "", passwordSignIn: "" }}
        validate={() => {}}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }: FormikProps<IUserSignIn>) => (
          <Form className="w-full flex flex-col gap-5">
            {formSignInData.map((field: IFormSignInData, i: number) => (
              <InputAuthField
                key={i}
                label={field.label}
                name={field.name}
                type={field.type}
                icon={field.icon}
                errors={errors[field.name as keyof IUserSignIn]}
                touched={touched[field.name as keyof IUserSignIn]}
                color="white"
                required={field.required}
              />
            ))}
            <button
              type="button"
              className="text-xs self-end text-letterColorLight dark:text-primaryColor"
            >
              ¿Olvidaste tu contraseña?
            </button>
            <ButtonAuth label="INGRESAR" form="signIn" />
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default FormSignIn;
