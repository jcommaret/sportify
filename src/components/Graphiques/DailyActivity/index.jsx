import {
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

export default function DailyActivity({ data }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart width={760} height={200} data={data}>
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          wrapperStyle={{ top: -45 }}
        />
        <CartesianGrid strokeDasharray="1" vertical={false} />
        <Tooltip dataKey="calories" />
        <Bar barSize={7} dataKey="calories" fill="#282D30" />
        <Bar barSize={7} dataKey="kilogram" fill="#E60000" />
        <XAxis dataKey="day" />
        <YAxis dataKey="kilogram" orientation="right" />
      </BarChart>
    </ResponsiveContainer>
  )
}
