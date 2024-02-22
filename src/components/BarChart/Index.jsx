import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Chart } from "react-chartjs-2";
import { set } from "lodash";

const BarCharts = () => {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const days = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  // getting data from the api
  const [data, setData] = useState([]);
  const [day, setDay] = useState([]);
  const [isDay, setIsDay] = useState(false);
  const [chartData, setChartData] = useState({
    labels: isDay ? days : months,
    datasets: [
      {
        backgroundColor: "#0026ff33",
        data: [
          10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30,
          20, 10,
        ],
        // data: day.map((data) => data.count),
        label: "Visitas",
        borderWidth: 1,
      },
    ],
  });

  // I need to save the day and how many visits it happened that day!
  // day1 = 0 ... day31 = 0
  // Associating the data with the days and months, and counting the number of visits in each day and month, and returning the data to be used in the graph!
  // const data = days.map((day) => {
  //   const visits = data.filter((visit) => visit.visited_on === day);
  //   return {
  //     day,
  //     visits: visits.length,
  //   };
  // });
  //fetch data day from the api;
  useEffect(() => {
    fetch("http://localhost:5000/days")
      .then((response) => response.json())
      .then((data) => {
        // data recieve from the api
        // bairro
        // cep
        // cidade
        // cpf
        // genero
        // id
        // nome
        // profissao
        // senha
        // visited-on !
        setDay(data);
      });
  }, []);

  // fetch data from the api
  useEffect(() => {
    fetch("http://localhost:5000/visitante")
      .then((response) => response.json())
      .then((data) => {
        // data recieve from the api
        // bairro
        // cep
        // cidade
        // cpf
        // genero
        // id
        // nome
        // profissao
        // senha
        // visited-on !
        setData(data);
      });
  }, []);
  function visitedCount() {
    // i need to go though the data and count how many visits happened in each day
    data.map((visit) => console.log(visit.visited_on));
    // I need to save the month and how many visits it happened that month!
  }
  // visitedCount();
  useEffect(() => {
    setChartData({
      labels: isDay ? days : months,
      datasets: [
        {
          backgroundColor: "#0026ff33",
          data: [
            10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80, 70, 60, 50, 40, 30,
            20, 10,
          ],
          // data: day.map((data) => data.count),
          label: "Visitas",
          borderWidth: 1,
        },
      ],
    });
  }, [isDay]);

  return (
    <div className="chartComponent">
      <h1 className="btnDayMonth" onClick={() => setIsDay(!isDay)}>
        {isDay ? "dia" : "mês"}
      </h1>
      <h1>{isDay ? "Visitas por dia" : "Visitas por mês"}</h1>
      <Chart width={600} type="bar" data={chartData} />
    </div>
  );
};

export default BarCharts;
