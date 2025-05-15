import CustomTooltip from "@/components/ui/AdminComponents/CustomTooltip/CustomTooltip";
import { articleStats } from "@/data/AdminStats/admin-stats";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
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
  const { isDark } = useThemeStore();

  return (
    <div className="rounded-[5px] shadow-md p-2 w-full dark:shadow-bgColor/20">
      <h2 className="font-medium">Artículos</h2>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={articleStats()} layout="vertical">
          <XAxis type="number" hide />
          <YAxis
            dataKey="name"
            type="category"
            width={110}
            tick={{
              style: {
                fontSize: "12px",
                textAnchor: "start",
                fill: isDark ? "#FAFAFA" : "#000000",
              },
            }}
            dx={-90}
          />
          <Bar dataKey="value" barSize={17}>
            {articleStats().map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={isDark && entry.name === "Total:" ? "#444" : entry.color}
              />
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
