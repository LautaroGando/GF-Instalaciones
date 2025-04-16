import CustomTooltip from "@/components/ui/AdminComponents/CustomTooltip/CustomTooltip";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { userStats } from "@/data/AdminStats/admin-stats";
import { useUserStore } from "@/store/UserStore/userStore";
import React, { useEffect } from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const UserStats: React.FC = () => {
  const { users, isLoading, handleFetchUsers } = useUserStore();

  useEffect(() => {
    handleFetchUsers();
  }, [handleFetchUsers]);

  return (
    <div className="rounded-[5px] shadow-md p-2 w-full min-h-[200px] flex flex-col">
      <h2 className="font-medium">Usuarios</h2>
      {isLoading ? (
        <div className="h-full flex items-center">
          <Loading theme="light" />
        </div>
      ) : (
        <ResponsiveContainer className="h-full" width="100%" height={150}>
          <BarChart data={userStats(users)} layout="vertical">
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              width={110}
              tick={{
                style: {
                  fontSize: "12px",
                  textAnchor: "start",
                },
              }}
              dx={-90}
            />
            <Bar dataKey="value" barSize={17}>
              {users &&
                userStats(users).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
            </Bar>
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default UserStats;
