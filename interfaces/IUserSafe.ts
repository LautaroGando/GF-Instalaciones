export interface IUserSafe {
  id: string;
  user: {
    fullName: string;
    email: string;
    birthDate: string;
    idNumber: string;
    location: string;
    address: string;
    country: string;
    phone: string;
    coverage: string;
    isSubscribed: boolean;
    disabledAt: string | null;
    createdAt: string;
  };
}
