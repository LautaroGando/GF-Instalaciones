import { Form, Formik } from "formik";
import React from "react";

export const FormCompleteInstallation: React.FC = () => {
  return (
    <Formik initialValues={{}} validate={() => {}} onSubmit={() => {}}>
      {({ errors, touched }) => (
        <Form>
          <div></div>
        </Form>
      )}
    </Formik>
  );
};

export default FormCompleteInstallation;
