import React from "react"
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts"

export default function TotalScore({ data }) {
  const progress = [{ name: "L1", value: data * 100 }]
  const circleSize = 250

  return (
    <RadialBarChart
      width={circleSize}
      height={circleSize}
      cx={circleSize / 2}
      cy={circleSize / 2}
      innerRadius={100}
      outerRadius={120}
      barSize={10}
      data={progress}
      startAngle={90}
      endAngle={-270}
    >
      <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        clockWise
        dataKey="value"
        cornerRadius={circleSize / 2}
        fill="#FF0101"
      />
      <text
        x={circleSize / 2}
        y={circleSize / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-label"
      >
        {data * 100}%
      </text>
    </RadialBarChart>
  )
}
