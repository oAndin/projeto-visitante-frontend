import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Chart } from "react-chartjs-2";
const BarCharts = () => {
  // getting data from the api
  const [data, setData] = useState([]);
  const [day, setDay] = useState([]);
  const [isDay, setIsDay] = useState(true);

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

  let [chartData, setChartData] = useState({
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    // labels: day.map((data) => data.test),
    datasets: [
      {
        backgroundColor: "#0026ff33",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        // data: day.map((data) => data.count),
        label: "Visitas",
        borderWidth: 1
      },
    ],
  });

  return (
    <>
      <Chart width={700} type="bar" data={chartData} />
    </>
  );
};

export default BarCharts;
