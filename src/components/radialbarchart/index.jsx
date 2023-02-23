import React from "react"
import { RadialBarChart, RadialBar, Legend } from "recharts"

export default function RadialBarChartWithData({ data }) {
  return (
    <RadialBarChart
      width={250}
      height={250}
      cx={125}
      cy={125}
      innerRadius={100}
      outerRadius={120}
      barSize={5}
      data={data}
      startAngle={0}
      endAngle={360}
    >
      <RadialBar
        startAngle={0}
        endAngle={300}
        dataKey="uv"
        background={{ fill: "#eee" }}
        fill={"#"}
      />
    </RadialBarChart>
  )
}
