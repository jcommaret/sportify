import {
  BarChart,
  Legend,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

export default function BarChartWithUserData({ data }) {
  return (
    <BarChart width={760} height={200} data={data}>
      <Legend layout="vetical" verticalAlign="top" align="right" />
      <CartesianGrid strokeDasharray="1" vertical={false} />
      <XAxis dataKey="serie" />
      <Tooltip dataKey="serie" />
      <Bar barSize={7} dataKey="calories" fill="#282D30" />
      <Bar barSize={7} dataKey="weight" fill="#E60000" />
      <YAxis dataKey="weight" orientation="right" />
    </BarChart>
  )
}
