import type { TInstallerStatus } from "@/types/TInstaller";
import { IUser } from "./IUser";

export interface IInstaller {
  id: string;
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
  status: TInstallerStatus;
  user: IUser;
}
