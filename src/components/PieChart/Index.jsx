import { PieChart, Pie, Tooltip } from "recharts";

const PieChartGender = ({ width, height, radius }) => {
  const data = [
    { name: "Masculino", value: 400 },
    { name: "Feminino", value: 300 },
    { name: "Outros", value: 300 },
  ];

  return (
    <div className="piechart-container">
      <PieChart width={width} height={height}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={radius}
          fill="#8884d8"
          label={true}
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default PieChartGender;
