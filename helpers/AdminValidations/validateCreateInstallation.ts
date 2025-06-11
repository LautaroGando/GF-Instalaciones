import * as Yup from "yup";

const installationSchema = Yup.object().shape({
  startDate: Yup.string()
    .required("La fecha de inicio es obligatoria")
    .test("is-future", "La fecha debe ser futura", (value) => {
      if (!value) return false;
      return new Date(value).getTime() > Date.now();
    }),

  notes: Yup.string(),
  address: Yup.object().shape({
    street: Yup.string().required("La calle es obligatoria"),
    number: Yup.string().required("El número es obligatorio"),
    note: Yup.string(),
    postalCode: Yup.string().required("El código postal es obligatorio"),
    city: Yup.string().required("La ciudad es obligatoria"),
    province: Yup.string().required("La provincia es obligatoria"),
  }),
  installersIds: Yup.array().of(Yup.string()).min(1, "Debes seleccionar al menos un instalador"),
  coordinatorsIds: Yup.array().of(Yup.string()).min(1, "Debes seleccionar al menos un coordinador"),
});

export default installationSchema;
