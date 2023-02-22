import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts"

export default function RadarChartWithData({ data }) {
  return (
    <RadarChart
      cx={135}
      cy={130}
      outerRadius={90}
      width={270}
      height={270}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="work" stroke="#FFFFFF" />
      <Radar
        name="Mike"
        dataKey="score"
        stroke="#FF0101"
        fill="#FF0101"
        fillOpacity={0.7}
      />
    </RadarChart>
  )
}
