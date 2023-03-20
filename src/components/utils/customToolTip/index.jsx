import "./index.scss"

export const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div>
          {payload.map((pld) => (
            <div className="tp">
              <div>
                {pld.value} {pld.dataKey}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
