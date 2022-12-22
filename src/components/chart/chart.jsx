import React, { useState } from "react";
import Chart from "react-apexcharts";
import { MockChartData } from "../../../data";

const LineChart = () => {
  const series = [
    //data on the y-axis
    {
      name: "Coin Graph",
      data: MockChartData.map((data) => data.average_temp),
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: MockChartData.map((data) => data.date),
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" width="290" />
    </div>
  );
};

export default LineChart;
