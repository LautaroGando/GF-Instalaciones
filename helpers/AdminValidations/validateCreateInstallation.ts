import * as Yup from "yup";

const installationSchema = Yup.object().shape({
  street: Yup.string().required("La calle es obligatoria"),
  number: Yup.string().required("El número es obligatorio"),
  city: Yup.string().required("La ciudad es obligatoria"),
  province: Yup.string().required("La provincia es obligatoria"),
  postalCode: Yup.string().matches(/^\d{5}$/, "El código postal debe tener 5 dígitos").required("El código postal es obligatorio"),
  startDate: Yup.date().required("La fecha de inicio es obligatoria"),
});

export default installationSchema;
