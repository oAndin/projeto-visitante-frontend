import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function PieChartDemo() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["A", "B", "C"],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: ["#3fd5ffab", "#ff3f3fab", "#a83fffab"],
          hoverBackgroundColor: ["#3fd5ff", "#ff3f3f", "#a83fff"],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, []);

  return (
    <>
      <Chart type="pie" data={chartData} options={chartOptions} />
    </>
  );
}
