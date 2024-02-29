import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

const GraficoCidade = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const fetchVisitantesCidade = () => {
    fetch("http://localhost:8080/visitante/grafico-por-cidade")
      .then((response) => response.json())
      .then((visitantes) => {
        const data = {
          labels: visitantes.map((v) => v.cidade),
          datasets: [
            {
              data: visitantes.map((v) => v.total),
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
    fetchVisitantesCidade();
  }, []);

  return (
    <>
      <Chart type="pie" data={chartData} options={chartOptions} />
    </>
  );
}

export default GraficoCidade;