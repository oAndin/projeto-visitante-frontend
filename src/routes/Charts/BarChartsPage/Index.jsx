import React, { useEffect, useState } from "react";
import BarCharts from "../../../components/BarChart/Index";

const BarChartsPage = () => {

  const [days, setDays] = useState([]);
  const [months, setMonths] = useState([]);

  const fetchDays = () => {
    fetch("http://localhost:5000/days")
      .then((response) => response.json())
      .then((data) => {
        // console.log(days);
        setDays(data);
      });
  };

  const fetchMonths = () => {
    fetch("http://localhost:5000/months")
      .then((response) => response.json())
      .then((data) => {
        // console.log(months);
        setMonths(data);
      });
  };

  useEffect(() => {
    fetchDays();
    fetchMonths();
  },[]);

  return <BarCharts months={months} days={days} />;
};

export default BarChartsPage;
