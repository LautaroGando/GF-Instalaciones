import { IInstallationFilters } from "@/interfaces/IInstallationFilters";
import { IInstallationSortParams } from "@/interfaces/IInstallationSortParams";

interface InstallationsPagination {
  page: number;
  limit?: number;
}

export type TInstallationQueryParams = IInstallationFilters &
  IInstallationSortParams &
  InstallationsPagination;
