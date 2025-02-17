import CustomTooltip from "@/components/ui/AdminComponents/CustomTooltip/CustomTooltip";
import React from "react";
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
  const data = [
    { name: "Total:", value: 400, color: "#000000" },
    { name: "Usuario:", value: 300, color: "#A79351" },
    { name: "Instalador:", value: 200, color: "#A79351B3" },
    { name: "Coordinador:", value: 150, color: "#A7935166" },
  ];

  return (
    <div className="rounded-[5px] shadow-md p-2 w-full">
      <h2 className="font-medium">Usuarios</h2>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data} layout="vertical">
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
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserStats;
