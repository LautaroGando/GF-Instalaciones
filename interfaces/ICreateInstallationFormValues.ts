export interface ICreateInstallationFormValues {
  startDate: string;
  notes?: string;
  address: {
    street: string;
    number: string;
    note: string;
    postalCode: string;
    city: string;
    province: string;
  };
  installersIds: string[];
  coordinatorId: string;
}

export default ICreateInstallationFormValues;
