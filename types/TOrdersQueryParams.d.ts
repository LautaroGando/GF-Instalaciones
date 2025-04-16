import { IOrderFilters } from "./IOrderFilters";
import { IOrderSortParams } from "./IOrderSortParams";

interface ordersPagination {
  page: number;
  limit?: number;
}

interface ordersSearch {
  search?: string;
}


export type TOrdersQueryParams = IOrderFilters & IOrderSortParams & ordersPagination & ordersSearch;
