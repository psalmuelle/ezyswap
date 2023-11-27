import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const MarketPairChart = ({ data }) => {
  return (
    <ResponsiveContainer className={" p-0 flex justify-center items-center"}>
      <AreaChart
        width={"100%"}
        height={250}
        data={data}
        margin={{ top: 0, right: 0, left: -60, bottom: 10 }}>
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#1A9727' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#1A9727' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey='name' tick={""} />
        <YAxis domain={["dataMin", "dataMax"]} tick={""} />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='price'
          stroke='#1A9727'
          fillOpacity={1}
          fill='url(#colorUv)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MarketPairChart;
