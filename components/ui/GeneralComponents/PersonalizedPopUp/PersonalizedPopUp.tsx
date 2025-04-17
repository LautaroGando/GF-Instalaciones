import Swal from "sweetalert2";
import { IPersonalizedPopUpProps } from "./types";

export const PersonalizedPopUp = async ({
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
      timer: 2000,
      timerProgressBar: true,
    });
    return;
  }

  if (withResult) {
    const result = await Swal.fire({
      title: title,
      text: text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
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
      timer: 2000,
      timerProgressBar: true,
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
      timer: 2000,
      timerProgressBar: true,
    });
  } finally {
    setSubmiting?.(false);
  }
};

export default PersonalizedPopUp;
