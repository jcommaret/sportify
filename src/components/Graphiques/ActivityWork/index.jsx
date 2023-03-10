import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts"

export default function ActivityWork({ data }) {
  return (
    <RadarChart
      cx={135}
      cy={130}
      outerRadius={90}
      width={270}
      height={270}
      data={data}
      angle={45}
    >
      <PolarGrid gridType="polygon" radialLines={false} />
      <PolarAngleAxis dataKey="kindActivity" stroke="#FFFFFF" />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#FF0101"
        fill="#FF0101"
        fillOpacity={0.7}
      />
    </RadarChart>
  )
}
