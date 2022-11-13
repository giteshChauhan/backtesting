import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";

const ChartLine = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3}>
      <LineChart
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
        <XAxis dataKey="Date" />
        <YAxis domain={["dataMin - 5", "dataMax + 5"]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Open"
          stroke="blue"
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartLine;
