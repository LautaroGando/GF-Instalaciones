import * as Yup from "yup";

const validateEditInstallation = Yup.object({
  id: Yup.string().required("El ID es obligatorio"),
  startDate: Yup.date().required("La fecha de inicio es obligatoria"),
});

export default validateEditInstallation;
