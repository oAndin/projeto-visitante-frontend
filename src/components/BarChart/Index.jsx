import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

const BarCharts = ({ days, months }) => {
  const [isDay, setIsDay] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    let labelDays = days.map((day) => day.id);
    let labelMonths = months.map((month) => month.name);
    let dataType = isDay ? "day" : "month";
    fetch("http://localhost:5000/visitante")
      .then((response) => response.json())
      .then((visitantes) => {
        console.log(visitantes);
      });

    const data = {
      labels: isDay ? labelDays : labelMonths,
      datasets: [
        {
          label: isDay ? "dia" : "mês",
          data: isDay
            ? [1, 2, 3, 4, 5, 4, 3, 2, 1, 6, 3, 13, 35, 45]
            : [1234, 12345, 1234, 12345],
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
          borderWidth: 3,
        },
      ],
    };
    const options = {
      responsive: true,
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
