import React from "react";
import UserStats from "./UserStats/UserStats";
import ArticleStats from "./ArticleStats/ArticleStats";
import OrderStats from "./OrderStats/OrderStats";

export const Panel: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 2xl:flex-row">
      <div className="flex flex-col gap-5 w-full md:flex-row 2xl:flex-col">
        <UserStats />
        <ArticleStats />
      </div>
      <OrderStats />
    </div>
  );
};

export default Panel;
