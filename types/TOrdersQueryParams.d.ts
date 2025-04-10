import { IOrderFilters } from "./IOrderFilters";
import { IOrderSortParams } from "./IOrderSortParams";

interface ordersPagination {
  page: number;
  limit?: number;
}

export type TOrdersQueryParams = IOrderFilters & IOrderSortParams & ordersPagination;
