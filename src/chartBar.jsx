import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  Bar,
} from "recharts";

const ChartBar = ({ data }) => {
  return (
    <div className="m-5 ms-5">
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="exitPoint" />
          <YAxis domain={["dataMin -1", "dataMax + 1"]} />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="netProfit" fill="#8884d8" />
          <Bar dataKey="profitPercent" fill="#198754" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBar;
