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
import { CustomTooltip } from "../../utils/customToolTip"
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
    <ResponsiveContainer width="99%" height={250}>
      <BarChart width={800} height={100} data={data}>
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          wrapperStyle={{ top: -45, color: "#74798C" }}
          iconType="circle"
        />
        <CartesianGrid strokeDasharray="1" vertical={false} />

        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: "none" }}
        />

        <Bar
          barSize={7}
          dataKey="Calories"
          name="Calories brûlées (kCal)"
          shortName="kCal"
          fill="#282D30"
          radius={[5, 5, 0, 0]}
          yAxisId="Calories"
        />

        <Bar
          barSize={7}
          dataKey="Kilograms"
          shortName="kg"
          name="Poids (kg)"
          color="#74798C"
          fill="#E60000"
          radius={[5, 5, 0, 0]}
          yAxisId="Kilograms"
        />

        <XAxis dataKey="jourNumber" />

        <YAxis
          yAxisId="Calories"
          dataKey="Calories"
          orientation="left"
          hide
          tickCount={3}
        />

        <YAxis
          yAxisId="Kilograms"
          dataKey="Kilograms"
          orientation="right"
          tickCount={3}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
