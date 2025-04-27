import TInstallationStatus from "@/types/TInstallationStatus";

export const installationSteps: TInstallationStatus[] = [
  "Pendiente",
  "En proceso",
  "A revisar",
  "Finalizada",
];

export const isSpecialStatus = (status: TInstallationStatus) =>
  status === "Cancelada" || status === "Pospuesta";

export const getStepVisualState = (
  currentStatus: TInstallationStatus,
  step: TInstallationStatus
): "done" | "half" | "pending" | "inactive" => {
  if (isSpecialStatus(currentStatus)) return "inactive";

  const currentIndex = installationSteps.indexOf(currentStatus);
  const stepIndex = installationSteps.indexOf(step);

  if (stepIndex < currentIndex) return "done";
  if (stepIndex === currentIndex) return "half";
  return "pending";
};
