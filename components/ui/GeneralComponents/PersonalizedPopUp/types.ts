export interface IPersonalizedPopUp {
  withResult: boolean;
  title?: string;
  titleSuccess: string;
  titleError: string;
  text?: string;
  textSuccess: string;
  textError: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  installationId?: string;
  setEditedInstallationId?: (id: string | null) => void;
  setSubmiting?: (isSubmiting: boolean) => void;
  genericFunction?: <T extends unknown[]>(
    ...args: T
  ) => Promise<unknown> | void;
  closeModal?: () => void;
  clearInstallers?: () => void;
  clearCoordinators?: () => void;
}
