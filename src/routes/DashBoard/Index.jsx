import BarCharts from "../../components/BarChart/Index";
import PieChartGender from "../../components/PieChart/Index";

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
