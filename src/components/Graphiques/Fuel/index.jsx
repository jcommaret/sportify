import calories from "../../../assets/icon/calories-icon.png"
import proteines from "../../../assets/icon/protein-icon.png"
import glucides from "../../../assets/icon/carbs-icon.png"
import lipides from "../../../assets/icon/fat-icon.png"

/**
 * Fuel component
 * @component Fuel is in charge of displaying calories, proteins, carbohydrates and lipids information in the dashboard
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
