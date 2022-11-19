import React from "react";
import {
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

const OverallChart = ({ data }) => {
  return (
    <ResponsiveContainer width={"95%"} height={300}>
      <BarChart data={data}>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="day" hide={true} />
        <YAxis type="number" allowDataOverflow={true} height={400} />
        <Bar dataKey={"cases.new"} fill="##1f4e6b" />
        <Bar dataKey={"deaths.new"} fill="#ff0000" />
        <Legend />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  );
};

OverallChart.propTypes = {
  data: PropTypes.array,
};

export default OverallChart;
