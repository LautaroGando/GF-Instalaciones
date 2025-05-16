export interface IUserSignIn {
  emailSignIn: string;
  passwordSignIn: string;
}

export interface IUserSignUp {
  fullName: string;
  email: string;
  birthDate: string;
  idNumber: string;
  country: string;
  location: string;
  locality: string;
  postalCode: string;
  address: string;
  coverage: string;
  phone: string;
  password: string;
  repeatPassword: string;
}

export interface IUserSignUpInstaller extends IUserSignUp {
  taxCondition: string;
  queries: string;
  hasPersonalAccidentInsurance: boolean;
  canWorkAtHeight: boolean;
  canTensionFrontAndBackLonas: boolean;
  canInstallCorporealSigns: boolean;
  canInstallFrostedVinyl: boolean;
  canInstallVinylOnWallsOrGlass: boolean;
  canDoCarWrapping: boolean;
  hasOwnTransportation: boolean;
}

export interface IUserSignUpOption {
  value: string;
  option: string;
}

export interface IUserRecoveryPassword {
  newPassword: string;
  repeatPassword: string;
}

export interface IUserSendEmail {
  email: string;
}