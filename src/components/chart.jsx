import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ChartData } from "../../data";

const MyCharts = () => {
  const series = [
    //data on the y-axis
    {
      name: "Coin Graph",
      data: ChartData.map((data) => data.average_temp),
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "bar-chart" },
    xaxis: {
      categories: ChartData.map((data) => data.date),
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" width="300" />
    </div>
  );
};

export default MyCharts;
