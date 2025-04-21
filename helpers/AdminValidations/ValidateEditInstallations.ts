import * as Yup from "yup";

const validateEditInstallation = Yup.object({
  startDate: Yup.date().required("La fecha de inicio es obligatoria"),
  installersIds: Yup.array()
    .min(1, "Debes seleccionar al menos un instalador")
    .required("Los instaladores son obligatorios"),
});

export default validateEditInstallation;
