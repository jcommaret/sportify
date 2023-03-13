import { LineChart, Line, YAxis, XAxis, Tooltip } from "recharts"

//* SessionsAvg component




export default function SessionsAvg({ data }) {
  return (
    <LineChart width={320} height={140} data={data}>
      <XAxis dataKey="jourLetter" stroke="#FFFFFF" />
      <YAxis axisLine={false} tick={false} />
      <Tooltip dataKey={data} />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="#FFFFFF"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  )
}