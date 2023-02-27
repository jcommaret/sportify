import { LineChart, Line, YAxis, XAxis, Tooltip } from "recharts"

export default function SessionsAvg({ data }) {
  return (
    <LineChart width={320} height={140} data={data}>
      <XAxis dataKey="day" stroke="#FFFFFF" />
      <YAxis axisLine={false} tick={false} />
      <Tooltip dataKey="time" />
      <Line
        type="monotone"
        dataKey="time"
        stroke="#FFFFFF"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}
