import IInstallation from "@/interfaces/IInstallation";
import { IStatusStyle } from "@/interfaces/IStatusStyle";

export interface IInstallationCardProps {
  styles: IStatusStyle;
  installation: IInstallation
}