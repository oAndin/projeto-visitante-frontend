import BarCharts from "../../components/BarChart/Index";
import PieChartGender from "../../components/PieChart/Index";
import useDays from "../../hooks/useDays";
import useMonths from "../../hooks/useMonths";
import PieCityPage from "../Charts/PieCityPage";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard-container">
        <BarCharts />
        <PieChartGender />
        <PieCityPage />
      </div>
    </>
  );
};

export default DashBoard;
