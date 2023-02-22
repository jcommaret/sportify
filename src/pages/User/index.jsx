import "./index.scss"
import React from "react"
import { useParams } from "react-router-dom"

import BarChartWithUserData from "../../components/barchart"

import users from "../../data/user.json"
import dataBarChart from "../../data/dataBarChart.json"

export default function UserPage() {
  const id = useParams().id
  const userList = users
  const user = userList[id]
  const dataForBarChart = dataBarChart

  // Datas
  const name = user.name
  const yesterday = user.yesterday

  return (
    <>
      <section className="welcome">
        <p className="hello">
          Bonjour <span>{name}</span>
        </p>
        {yesterday && (
          <p className="greetings">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        )}
      </section>

      <div className="container">
        <section className="activity">
          <h2 className="activity-title">Activité quotidienne</h2>
          <BarChartWithUserData data={dataForBarChart}></BarChartWithUserData>
        </section>
      </div>

      <div className="container">
        <section className="sessions">
          <h2 className="sessions-title">Sessions</h2>
          <p>Line charts</p>
        </section>

        <section className="activity-work">
          <p>Radar</p>
        </section>

        <section className="score">
          <p>Radial Bar charts</p>
        </section>
      </div>
    </>
  )
}
