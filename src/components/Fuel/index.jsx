import calories from "../../assets/icon/calories-icon.png"
import proteines from "../../assets/icon/protein-icon.png"
import glucides from "../../assets/icon/carbs-icon.png"
import lipides from "../../assets/icon/fat-icon.png"

export default function Fuel({ data }) {
  const foodItems = [
    { ratio: data.calorieCount, type: "calories", img: calories },
    { ratio: data.proteinCount, type: "Proteines", img: proteines },
    { ratio: data.carbohydrateCount, type: "Glucides", img: glucides },
    { ratio: data.lipidCount, type: "Lipides", img: lipides },
  ]
  return (
    <div className="fuel">
      {foodItems.map((item, index) => {
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
