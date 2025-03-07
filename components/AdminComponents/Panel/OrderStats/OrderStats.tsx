import CustomTooltip from "@/components/ui/AdminComponents/CustomTooltip/CustomTooltip";
import { orderStats } from "@/data/AdminStats/admin-stats";
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

export const OrderStats: React.FC = () => {
  return (
    <div className="rounded-[5px] shadow-md p-2 w-full overflow-x-scroll sm:overflow-hidden">
      <h2 className="font-medium text-lg">Órdenes</h2>
      <div className="grid grid-cols-2 gap-4 w-[200%] sm:w-full">
        <div className="col-span-2 w-full">
          <ResponsiveContainer width="100%" height={40}>
            <BarChart data={orderStats()[0].data} layout="vertical">
              <XAxis type="number" hide />
              <YAxis
                dataKey="name"
                type="category"
                width={130}
                tick={{
                  style: { fontSize: "12px", textAnchor: "start" },
                }}
                dx={-120}
              />
              <Bar dataKey="value" barSize={20}>
                <Cell fill="#000000" />
              </Bar>
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "transparent" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {orderStats()
          .slice(1)
          .map((region, index) => (
            <div key={index} className="w-full">
              <h3 className="font-medium text-sm">{region.title}</h3>
              <ResponsiveContainer
                width="100%"
                height={region.data.length * 32}
              >
                <BarChart data={region.data} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={130}
                    tick={{
                      style: { fontSize: "12px", textAnchor: "start" },
                    }}
                    dx={-120}
                  />
                  <Bar dataKey="value" barSize={17}>
                    {region.data.map((entry, index) => (
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
          ))}
      </div>
    </div>
  );
};

export default OrderStats;
