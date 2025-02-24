import React from "react";
import OrderAndFilter from "../../ui/AdminComponents/OrderAndFilter/OrderAndFilter";
import {
  filterUsers,
  orderUsers,
} from "@/data/OrderAndFilter/order-and-filter";
import Pagination from "@/components/ui/AdminComponents/Pagination/Pagination";
import UsersTable from "./UsersTable/UsersTable";

export const Users: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <OrderAndFilter
          filter={filterUsers}
          order={orderUsers}
          filterId="filterUsers"
          orderId="orderUsers"
        />
        <Pagination />
      </div>
      <UsersTable />
    </div>
  );
};

export default Users;
