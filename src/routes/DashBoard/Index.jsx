import BarCharts from "../../components/BarChart/Index";
import PieChartGender from "../../components/PieChart/Index";
import useDays from "../../hooks/useDays";
import useMonths from "../../hooks/useMonths";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard-container">
        <BarCharts />
        <PieChartGender />
      </div>
    </>
  );
};

export default DashBoard;
