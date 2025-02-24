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
  address: string;
  coverage: string;
  phone: string;
  password: string;
  repeatPassword: string;
}

export interface IUserSignUpInstaller extends IUserSignUp {
  taxCondition: string;
  detailJobs: string;
  expandInformation: string;
  personalAccidentInsurance: string;
  installationsAtHeight: string;
  canvasTensioning: string;
  installationOfCorporeals: string;
  installationFrostedVinyls: string;
  installationOfVinylOnWallsGlasses: string;
  carwrapping: string;
  ownMobility: string;
}

export interface IUserSignUpOption {
  value: string;
  option: string;
}
