import { useEffect, useState } from "react";
import { Chart } from "primereact/chart";
import axios from "axios";
import useDays from "../../hooks/useDays";
import useMonths from "../../hooks/useMonths";
import useVisitantes from "../../hooks/useVisitane";

const BarCharts = () => {
  const [isDay, setIsDay] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const days = useDays([]);
  const months = useMonths([]);
  const  visitantes = useVisitantes([]);
  console.log(visitantes);

  const fetchData = async () => {
    let monthName;
    // create a function which goes though the array, creating an object with name and count, and counts the number of times a day appears
    const dayCount = [
      days.map((day) => {
        return (day = {
          dayNumber: day.id,
          monthName: "",
          count: 0,
        });
      }),
    ];
    // switch (monthName) {
    //   case "Janeiro":
    //     count += 1;
    //     break;
    //   case "Fevereiro":
    //     count += 1;
    //     break;
    //   case "Março":
    //     count += 1;
    //     break;
    //   case "Abril":
    //     count += 1;
    //     break;
    //   case "Maio":
    //     count += 1;
    //     break;
    //   case "Junho":
    //     count += 1;
    //     break;
    //   case "Julho":
    //     count += 1;
    //     break;
    //   case "Agosto":
    //     count += 1;
    //     break;
    //   case "Setembro":
    //     count += 1;
    //     break;
    //   case "Outubro":
    //     count += 1;
    //     break;
    //   case "Novembro":
    //     count += 1;
    //     break;
    //   case "Dezembro":
    //     count += 1;
    //     break;
    //   default:
    //     console.log("Invalid month");
    // }

    const data = {
      // labels: isDay ? ["dia 1"] : ["Janeiro"],
      labels: isDay ? days : months,
      datasets: [
        {
          label: isDay ? "dia" : "mês",
          data: isDay
            ? // day label ->  day name = day.id
              [1, 2, 3, 4, 5, 4, 3, 2, 1, 6, 3, 13, 35, 45]
            : // day 1 data -> day 1 name == day.id -> day 1 count
              [10, 20, 10, 20, 10, 20],
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
      // aspectRatio: 1,
      responsive: true,
      scales: {
        y: {
          max: 100,
          beginAtZero: true,
        },
        x: {},
      },
    };

    setChartData(data);
    setChartOptions(options);
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
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
