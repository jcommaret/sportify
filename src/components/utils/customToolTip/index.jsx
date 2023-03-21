import "./index.scss"

export const CustomTooltipRed = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { Calories, Kilograms } = payload[0].payload
    return (
      <div className="custom-tooltip-red">
        <div>
          <div className="tp">
            <div className="val">{Calories} kCal</div>
            <div className="val">{Kilograms} kg</div>
          </div>
        </div>
      </div>
    )
  }
}

export const CustomTooltipWhite = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { sessionLength } = payload[0].payload
    return (
      <div className="custom-tooltip-white">
        <div>
          <div className="tp">
            <div className="val">{sessionLength} min</div>
          </div>
        </div>
      </div>
    )
  }
}
