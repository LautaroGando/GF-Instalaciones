import React from "react";
import UserStats from "./UserStats/UserStats";
import ArticleStats from "./ArticleStats/ArticleStats";
import OrderStats from "./OrderStats/OrderStats";

export const Panel: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <UserStats />
      <ArticleStats />
      <OrderStats />
    </div>
  );
};

export default Panel;
