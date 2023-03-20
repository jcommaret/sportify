import "./index.scss"

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { Calories, Kilograms } = payload[0].payload
    return (
      <div className="custom-tooltip">
        <div>
          <div className="tp">
            <div>{Calories} kCal</div>
            <div>{Kilograms} kg</div>
          </div>
        </div>
      </div>
    )
  }
}
