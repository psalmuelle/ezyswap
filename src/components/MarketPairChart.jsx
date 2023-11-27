import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Line,
  LineChart,
} from "recharts";


const MarketPairChart = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <LineChart width={"100%"} height={"100%"} data={data} margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }} 
          >
        <XAxis />
        <YAxis domain={["rate_low", "rate_high"]} />
        <Tooltip />
        <Legend />
        <Line
          type='monotone'
          dataKey='rate_high'
          stroke='#1A9727'
          strokeWidth={3}
        />
        <Line
          type='monotone'
          dataKey='rate_low'
          stroke='#ED3232'
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MarketPairChart;
