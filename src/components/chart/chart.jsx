import React, { useState } from "react";
import Chart from "react-apexcharts";
import { MockChartData } from "../../../data";
import useMediaQuery from "../../../utils/hook";

const LineChart = () => {
  const series = [
    //data on the y-axis
    {
      name: "Coin Graph",
      data: MockChartData.map((data) => data.average),
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "line-chart" },
    xaxis: {
      categories: MockChartData.map((data) => data.date),
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
  };

  const isDesktop = useMediaQuery(`(min-width: 1024px)`);
  const width = isDesktop ? "350" : "290";

  return (
    <div>
      <Chart options={options} series={series} type="line" width={width} />
    </div>
  );
};

export default LineChart;
