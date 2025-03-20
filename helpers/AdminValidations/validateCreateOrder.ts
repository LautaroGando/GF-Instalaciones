import * as Yup from "yup";

export const orderSchema = Yup.object().shape({
  orderNumber: Yup.string().required("El ID de la orden es obligatorio"),
  title: Yup.string().required("El nombre de la orden es obligatorio"),
  description: Yup.string().required("La descripción es obligatoria"),
});

export default orderSchema;
