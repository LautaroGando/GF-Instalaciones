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

export const OrderStats: React.FC = () => {
  const regions = [
    {
      title: "Total",
      data: [{ name: "Total:", value: 1, color: "#000000", isTotal: true }],
    },
    {
      title: "CABA/GBA",
      data: [
        { name: "CABA:", value: 250, color: "#A79351" },
        { name: "GBA:", value: 50, color: "#A7935166" },
      ],
    },
    {
      title: "Zona Norte",
      data: [
        { name: "Jujuy:", value: 100, color: "#A79351" },
        { name: "Formosa:", value: 40, color: "#A7935166" },
        { name: "Salta:", value: 90, color: "#A79351B3" },
        { name: "Chaco:", value: 120, color: "#A79351" },
        { name: "Misiones:", value: 60, color: "#A7935166" },
        { name: "La Rioja:", value: 80, color: "#A79351B3" },
        { name: "Corrientes:", value: 110, color: "#A79351" },
        { name: "Tucumán:", value: 70, color: "#A7935166" },
        { name: "Santiago del Estero:", value: 50, color: "#A7935140" },
        { name: "Catamarca:", value: 30, color: "#A7935140" },
      ],
    },
    {
      title: "Zona Centro",
      data: [
        { name: "Entre Ríos:", value: 200, color: "#A79351" },
        { name: "Córdoba:", value: 80, color: "#A7935166" },
        { name: "Santa Fe:", value: 90, color: "#A79351B3" },
        { name: "San Juan:", value: 50, color: "#A7935166" },
        { name: "San Luis:", value: 40, color: "#A7935140" },
        { name: "Mendoza:", value: 70, color: "#A7935166" },
        { name: "La Pampa:", value: 30, color: "#A7935140" },
      ],
    },
    {
      title: "Zona Sur",
      data: [
        { name: "Neuquén:", value: 190, color: "#A79351" },
        { name: "Tierra del Fuego:", value: 60, color: "#A7935166" },
        { name: "Santa Cruz:", value: 50, color: "#A7935140" },
        { name: "Chubut:", value: 40, color: "#A7935166" },
        { name: "Río Negro:", value: 30, color: "#A7935140" },
      ],
    },
  ];

  return (
    <div className="rounded-[5px] shadow-md p-2 w-full overflow-x-scroll 2xl:overflow-hidden">
      <h2 className="font-medium text-lg">Órdenes</h2>
      <div className="grid grid-cols-2 gap-4 w-[200%] sm:w-full">
        <div className="col-span-2 w-full">
          <ResponsiveContainer width="100%" height={40}>
            <BarChart data={regions[0].data} layout="vertical">
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
        {regions.slice(1).map((region, index) => (
          <div key={index} className="w-full">
            <h3 className="font-medium text-sm">{region.title}</h3>
            <ResponsiveContainer width="100%" height={region.data.length * 32}>
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
