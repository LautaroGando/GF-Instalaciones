import CustomTooltip from "@/components/ui/AdminComponents/CustomTooltip/CustomTooltip";
import Loading from "@/components/ui/GeneralComponents/Loading/Loading";
import { orderStats } from "@/data/AdminStats/admin-stats";
import { useTrackingStore } from "@/store/Admin/TrackingStore/TrackingStore";
import { useThemeStore } from "@/store/ThemeStore/themeStore";
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

export const OrderStats: React.FC = () => {
  const { installations, handleFetchInstallationsPagination } =
    useTrackingStore();
  const { isDark } = useThemeStore();

  useEffect(() => {
    handleFetchInstallationsPagination();
  }, [handleFetchInstallationsPagination]);

  return (
    <div className="rounded-[5px] shadow-md p-2 w-full min-h-[700px] overflow-x-scroll dark:shadow-bgColor/20 sm:overflow-hidden">
      <h2 className="font-medium text-lg">Instalaciónes</h2>
      {!installations ? (
        <div className="h-[650px] flex items-center">
          <Loading theme="light" />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 w-[200%] sm:w-full">
          <div className="col-span-2 w-full">
            <ResponsiveContainer width="100%" height={40}>
              <BarChart
                data={orderStats(installations.result)[0].data}
                layout="vertical"
              >
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={130}
                  tick={{
                    style: {
                      fontSize: "12px",
                      textAnchor: "start",
                      fill: isDark ? "#FAFAFA" : "#000000",
                    },
                  }}
                  dx={-120}
                />
                <Bar dataKey="value" barSize={20}>
                  <Cell fill={isDark ? "#444" : "#000"} />
                </Bar>
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "transparent" }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {orderStats(installations.result)
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
                        style: {
                          fontSize: "12px",
                          textAnchor: "start",
                          fill: isDark ? "#FAFAFA" : "#000000",
                        },
                      }}
                      dx={-120}
                    />
                    <Bar dataKey="value" barSize={17}>
                      {region.data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            isDark && entry.name === "Total:"
                              ? "#444"
                              : entry.color
                          }
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
            ))}
        </div>
      )}
    </div>
  );
};

export default OrderStats;
