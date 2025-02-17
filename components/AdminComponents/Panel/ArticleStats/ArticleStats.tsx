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

export const ArticleStats: React.FC = () => {
  const data = [
    { name: "Total:", value: 337, color: "#000000" },
    { name: "Premium:", value: 250, color: "#A79351" },
    { name: "Plantilla 1:", value: 180, color: "#A79351B3" },
    { name: "Plantilla 2:", value: 140, color: "#A7935166" },
    { name: "Plantilla 3:", value: 120, color: "#A7935140" },
  ];

  return (
    <div className="rounded-[5px] shadow-md p-2 w-full">
      <h2 className="font-medium">Artículos</h2>
      <ResponsiveContainer width="100%" height={150}>
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

export default ArticleStats;
