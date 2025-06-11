import * as Yup from "yup";

export const orderSchema = Yup.object().shape({
  orderNumber: Yup.string().required("El ID de la orden es obligatorio"),
  title: Yup.string().required("El nombre de la orden es obligatorio"),
  description: Yup.string().required("La descripción es obligatoria"),
  clientsIds: Yup.array()
    .of(Yup.string())
    .min(1, "Debes seleccionar al menos un cliente.")
    .required("Debes seleccionar al menos un cliente."),
});

export default orderSchema;
