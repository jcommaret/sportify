import "./index.scss"
import React from "react"
import { useParams } from "react-router-dom"


import users from "../../data/user.json"

import BarChartWithUserData from "../../components/barchart"
import dataBarChart from "../../data/dataBarChart.json"

import LineChartWithUserData from "../../components/linechart"
import dataLineChart from "../../data/sessionTime.json"

import RadarChartWithData from "../../components/radarchart"
import dataRadarChart from "../../data/activityWork.json"

export default function UserPage() {
  const id = useParams().id
  const userList = users
  const user = userList[id]
  const dataFBarChart = dataBarChart
  const dataFLineChart = dataLineChart
  const dataFRadarChart = dataRadarChart
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
          <BarChartWithUserData data={dataFBarChart}></BarChartWithUserData>
        </section>
      </div>

      <div className="container">
        <section className="sessions">
          <h2 className="sessions-title">Durée moyenne des sessions</h2>
          <LineChartWithUserData data={dataFLineChart}></LineChartWithUserData>
        </section>

        <section className="activity-work">
          <RadarChartWithData data={dataFRadarChart}></RadarChartWithData>
        </section>

        <section className="score">
          <p>Radial Bar charts</p>
        </section>
      </div>
    </>
  )
}
