import { PropTypes } from "react"

import calories from "../../../assets/icon/calories-icon.png"
import proteines from "../../../assets/icon/protein-icon.png"
import glucides from "../../../assets/icon/carbs-icon.png"
import lipides from "../../../assets/icon/fat-icon.png"

/**
 * Fuel component
 * @component Fuel is in charge of displaying calories, proteins, carbohydrates and lipids information in the dashboard
 * @param {Props}  data
 * @param {Object} data.data
 * @param {Number} data.data.calorieCount
 * @param {Number} data.data.proteinCount
 * @param {Number} data.data.carbohydrateCount
 * @param {Number} data.data.lipidCount
 * @returns {JSX.Element} Fuel component
 *
 */
export default function Fuel({ data }) {
  Fuel.propTypes = {
    data: PropTypes.object.isRequired,
  }

  const foodType = [
    { ratio: data.calorieCount, type: "Calories", img: calories },
    { ratio: data.proteinCount, type: "Proteines", img: proteines },
    { ratio: data.carbohydrateCount, type: "Glucides", img: glucides },
    { ratio: data.lipidCount, type: "Lipides", img: lipides },
  ]
  return (
    <div className="fuel">
      {foodType.map((item, index) => {
        return (
          <div className="fuel-item" key={index}>
            <img src={item.img} alt={item.type} />
            <div className="fuel-item-info">
              <p>{item.ratio}</p>
              <p>{item.type}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
