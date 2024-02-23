import { useState, useEffect } from "react";
import { Chart } from "primereact/chart";

export default function PieChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const fetchVisitantesGenero = () => {
    fetch("http://localhost:5000/visitante")
      .then((response) => response.json())
      .then((visitantes) => {
        const informacoes = {
          masculino: 0,
          feminino: 0,
          outros: 0,
        };
        visitantes.map((v) => {
          if (v.genero === "masculino") {
            informacoes.masculino++;
          } else if (v.genero === "feminino") {
            informacoes.feminino++;
          } else {
            informacoes.outros++;
          }
        });
        const data = {
          labels: [
            "masculino",
            "feminino",
            "outros",
          ],
          datasets: [
            {
              data: [informacoes.masculino, informacoes.feminino, informacoes.outros],
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
