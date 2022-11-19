import React from "react";
import {
  //   LineChart,
  //   Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
  BarChart,
  Bar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
// import { format } from "date-fns";

const CasesTodayChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"95%"} height={300}>
      <BarChart height={300} data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <Tooltip cursor={{ fill: "#f2f3f3ff" }} />
        <YAxis type="number" height={400} />
        <Bar dataKey={"cases.new"} fill="#4dc9e8" />
        <Bar dataKey={"deaths.new"} fill="#ff0000" />
        <Legend />
      </BarChart>
    </ResponsiveContainer>
  );
};

CasesTodayChart.propTypes = {
  data: PropTypes.array,
};

export default CasesTodayChart;
