import {
  BarChart,
  Legend,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

import dataset from "./data.json"

const data = dataset

export default function BarChartWithUserData({}) {
  return (
    <BarChart width={835} height={300} data={data}>
      <Legend />
      <CartesianGrid strokeDasharray="3" />
      <XAxis dataKey="serie" />
      <Tooltip dataKey="serie" />
      <Bar barSize={7} dataKey="calories" fill="#282D30" />
      <Bar barSize={7} dataKey="weight" fill="#E60000" />
      <YAxis dataKey="calories" />
    </BarChart>
  )
}
