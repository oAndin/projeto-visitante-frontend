import BarCharts from "../../components/BarChart/Index";
import PieChartGender from "../../components/PieChart/Index";

const DashBoard = () => {
  return (
    <>
      <div className="dashboard-container">
        <BarCharts width={300} height={200} />
        <PieChartGender width={300} height={200} radius={50} />
      </div>
    </>
  );
};

export default DashBoard;
