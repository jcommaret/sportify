import React from "react"
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts"

export default function TotalScore({ data, valeur }) {
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
      data={data}
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
        dataKey={100}
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
        {valeur * 100} % de votre objectif
      </text>
    </RadialBarChart>
  )
}
