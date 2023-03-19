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
/**
 * DailyActivity Component is in charge of displaying the bar chart of the activity of the user 
 * @component DailyActivity component
 * @param {Props}  data
 * @param {Number} data.calories Calories Amount
 * @param {Number} data.kilograms kilograms Amount
 * @returns {JSX.Element} DailyActivity component
 * @exports DailyActivity
 */
export default function DailyActivity({ data }) {
  return (
    <ResponsiveContainer width="99%" height={200}>
      <BarChart width={760} height={100} data={data}>
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          wrapperStyle={{ top: -45 }}
          iconType="circle"
        />
        <CartesianGrid strokeDasharray="1" vertical={false} />
        <Tooltip dataKey="calories" />
        <Bar
          barSize={7}
          dataKey="calories"
          fill="#282D30"
          radius={[5, 5, 0, 0]}
          yAxisId="calories"
        />
        <Bar
          barSize={7}
          dataKey="kilogram"
          fill="#E60000"
          radius={[5, 5, 0, 0]}
          yAxisId="kilogram"
        />
        <XAxis dataKey="jourNumber" />
        <YAxis
          yAxisId="calories"
          dataKey="calories"
          orientation="left"
          hide
          tickCount={3}
        />
        <YAxis
          yAxisId="kilogram"
          dataKey="kilogram"
          orientation="right"
          tickCount={3}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
