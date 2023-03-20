import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts"

import "./index.scss"
/**
 * Activity Work Component is in charge of displaying the radar chart of the activity of the user
 * @component Activity Work component
 * @param {Props}  data
 * @param {Array}  data.kindActivity fullfilling the dataKey kindActivity of the PolarAngleAxis
 * @param {Number} data.value fullfilling the dataKey value of the Radar
 * @returns {JSX.Element} DailyActivity component
 * @exports ActivityWork component
 */

export default function ActivityWork({ data }) {
  return (
    <RadarChart
      cx={120}
      cy={125}
      outerRadius={70}
      width={250}
      height={250}
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
