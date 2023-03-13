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
 * Daily activity component
 * @component DailyActivity is in charge of displaying calories, and kilograms at the top left section of the dashboard
 * @param {Props}  data
 * @param {Number} data.calories Calories Amount
 * @param {Number} data.kilograms kilograms Amount
 * @exports DailyActivity
 */
export default function DailyActivity({ data }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart width={760} height={100} data={data} margin={20}>
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          wrapperStyle={{ top: -45 }}
        />
        <CartesianGrid strokeDasharray="1" vertical={false} />
        <Tooltip dataKey="calories" />
        <Bar
          barSize={7}
          dataKey="calories"
          fill="#282D30"
          radius={[5, 5, 0, 0]}
        />

        <Bar
          barSize={7}
          dataKey="kilogram"
          fill="#E60000"
          radius={[5, 5, 0, 0]}
        />
        <XAxis dataKey="jourNumber" />
        <YAxis dataKey="kilogram" orientation="right" />
      </BarChart>
    </ResponsiveContainer>
  )
}
