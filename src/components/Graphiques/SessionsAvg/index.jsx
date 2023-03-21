import { LineChart, Line, YAxis, XAxis, Tooltip } from "recharts"
import "./index.scss"
import { CustomTooltipWhite } from "../../utils/customToolTip"
/**
 * SessionsAvg Component is in charge of displaying the line chart of the sessions of the user
 * @component SessionsAvg component
 * @param {Props}  data
 * @param {Number} data.jourLetter fullfilling the dataKey jourLetter of the XAxis
 * @param {Number} data.sessionLength fullfilling the dataKey sessionLength of the Line
 * @returns {JSX.Element} Fuel component
 * @exports SessionsAvg component
 */

export default function SessionsAvg({ data }) {
  return (
    <LineChart width={320} height={140} data={data}>
      <XAxis
        dataKey="jourLetter"
        axisLine={false}
        tickSize={0}
        stroke="#FFFFFF"
      />
      <YAxis className="YAxis" axisLine={false} tick={false} top={10} />
      <Line
        type="natural"
        dataKey="sessionLength"
        stroke="#FFFFFF"
        tick={false}
        dot={false}
      />
      <Tooltip
        cursor={false}
        wrapperStyle={{ outline: "none" }}
        content={<CustomTooltipWhite />}
      />
    </LineChart>
  )
}
