import React from "react";
import {
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Area,
} from "recharts";
import PropTypes from "prop-types";

const OverallDeaths = ({ data }) => {
  return (
    <ResponsiveContainer width={"95%"} height={300}>
      <ComposedChart data={data.slice(data.length - 20, data.length - 1)}>
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="day" />
        <YAxis type="number" allowDataOverflow={true} height={400} />

        <Area
          type="monotone"
          dataKey="cases.recovered"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorPv)"
        />

        <Bar dataKey="deaths.total" fill="#b52610" />
        <Legend />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

OverallDeaths.propTypes = {
  data: PropTypes.array,
};

export default OverallDeaths;
