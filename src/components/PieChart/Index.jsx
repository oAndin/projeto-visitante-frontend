import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

  export default function PieChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const fetchVisitantesGenero = () => {
    fetch("http://localhost:8080/visitante/grafico-por-genero")
      .then((response) => response.json())
      .then((visitantes) => {
        const data = {
          labels: visitantes.map(v => v.genero),
          datasets: [
            {
              data: visitantes.map(v => v.total),
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
      });
  };

  useEffect(() => {
    fetchVisitantesGenero();
  }, []);

  return (
    <>
      <Chart type="pie" data={chartData} options={chartOptions} />
    </>
  );
}
