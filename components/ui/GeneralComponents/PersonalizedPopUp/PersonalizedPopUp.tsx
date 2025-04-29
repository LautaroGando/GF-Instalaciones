import Swal from "sweetalert2";
import { IPersonalizedPopUpProps } from "./types";

export const PersonalizedPopUp = async ({
  color,
  withResult,
  simpleModal,
  icon,
  text,
  textError,
  textSuccess,
  title,
  titleError,
  installationId,
  titleSuccess,
  cancelButtonText,
  confirmButtonText,
  setEditedInstallationId,
  setSubmiting,
  genericFunction,
  closeModal,
  clearInstallers,
  clearCoordinators,
}: IPersonalizedPopUpProps) => {
  if (simpleModal) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      toast: true,
      position: "top",
      showConfirmButton: false,
      color: "#8D8D8D",
      timer: 2000,
      timerProgressBar: true,
      background: color,
    });
    return;
  }

  if (withResult) {
    const result = await Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#A79351",
      cancelButtonColor: "#9CA3AF",
      color: "#8D8D8D",
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      background: color,
    });

    if (!result.isConfirmed) return;
  }

  setSubmiting?.(true);

  try {
    await genericFunction?.();

    Swal.fire({
      icon: "success",
      title: titleSuccess,
      text: textSuccess,
      toast: true,
      position: "top",
      showConfirmButton: false,
      color: "#8D8D8D",
      timer: 2000,
      timerProgressBar: true,
      background: color,
    });

    closeModal?.();

    if (installationId) {
      setEditedInstallationId?.(installationId);
      setTimeout(() => setEditedInstallationId?.(""), 2000);
    }

    clearInstallers?.();
    clearCoordinators?.();
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : textError;

    Swal.fire({
      icon: "error",
      title: titleError,
      text: errorMessage,
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      color: "#8D8D8D",
      timer: 2000,
      timerProgressBar: true,
      background: color,
    });
  } finally {
    setSubmiting?.(false);
  }
};

export default PersonalizedPopUp;
