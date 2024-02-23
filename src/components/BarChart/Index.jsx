import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const BarCharts = () => {
  const [isDay, setIsDay] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5000/visitante")
      .then((response) => response.json())
      .then((visitantes) => {});
    const data = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Sales",
          data: [540, 325, 702, 620],
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  };
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {}, []);

  // getting data from the api

  useEffect(() => {
    fetchData();
  }, [isDay]);

  return (
    <div className="chartComponent">
      <h1 className="btnDayMonth" onClick={() => setIsDay(!isDay)}>
        {isDay ? "dia" : "mês"}
      </h1>
      <h1>{isDay ? "Visitas por dia" : "Visitas por mês"}</h1>
      <Chart type="bar" data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarCharts;
