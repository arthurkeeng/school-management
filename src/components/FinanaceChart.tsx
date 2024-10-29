"use client";

import Image from "next/image";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 8000,
    expenditure: 5900,
  },
  {
    name: "Feb",
    income: 7600,
    expenditure: 4300,
  },
  {
    name: "Mar",
    income: 9000,
    expenditure: 2700,
  },
  {
    name: "Apr",
    income: 5000,
    expenditure: 2500,
  },
  {
    name: "May",
    income: 6000,
    expenditure: 3300,
  },
  {
    name: "Jun",
    income: 8900,
    expenditure: 4500,
  },
  {
    name: "Jul",
    income: 7200,
    expenditure: 4300,
  },
  {
    name: "Aug",
    income: 6500,
    expenditure: 5700,
  },
  {
    name: "Sep",
    income: 10000,
    expenditure: 3900,
  },
  {
    name: "Oct",
    income: 5700,
    expenditure: 3900,
  },
  {
    name: "Nov",
    income: 6000,
    expenditure: 9000,
  },
  {
    name: "Dec",
    income: 3800,
    expenditure: 6700,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer width="100%" height="90%">
          <LineChart width={600} height={300} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis
              dataKey="name"
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              axisLine={false}
              tickMargin={10} 
            />
            <YAxis
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <Tooltip />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
            />
            <Line type="monotone" dataKey="income" stroke="#c3ebfa" strokeWidth={3} />
            <Line type="monotone" dataKey="expenditure" stroke="#cfceff" strokeWidth={3}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default FinanceChart;
