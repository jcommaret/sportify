import calories from "../../../assets/icon/calories-icon.png"
import proteines from "../../../assets/icon/protein-icon.png"
import glucides from "../../../assets/icon/carbs-icon.png"
import lipides from "../../../assets/icon/fat-icon.png"

/**
 * Fuel is in charge of displaying calories, proteins, carbohydrates and lipids information in right side section of the dashboard
 * @component Fuel component
 * @param {Array.<{ratio: Number, type: String, img: String}>} foodType Array of food type
 * @param {Number} foodType.ratio Amount of food type (caloris, proteins, carbohydrates, lipids, comming from the database)
 * @param {String} foodType.type Type of food
 * @param {String} foodType.img Image of food type
 * @param {Props}  data
 * @param {Number} data.calorieCount Calories Amount
 * @param {Number} data.proteinCount Proteins Amount
 * @param {Number} data.carbohydrateCount Carbohydrathe Amount
 * @param {Number} data.lipidCount Lipide Amount
 *
 * @returns {JSX.Element} Fuel component
 * @exports Fuel
 */
export default function Fuel({ data }) {
  const foodType = [
    {
      ratio: data.calorieCount,
      units: "kCal",
      type: "Calories",
      img: calories,
    },
    { ratio: data.proteinCount, units: "g", type: "Proteines", img: proteines },
    {
      ratio: data.carbohydrateCount,
      units: "g",
      type: "Glucides",
      img: glucides,
    },
    { ratio: data.lipidCount, units: "g", type: "Lipides", img: lipides },
  ]
  return (
    <div className="fuel">
      {foodType.map((item, index) => {
        return (
          <div className="fuel-item" key={index}>
            <img src={item.img} alt={item.type} />
            <div className="fuel-item-info">
              <p className="bold">
                {item.ratio} {item.units}
              </p>
              <p>{item.type}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
