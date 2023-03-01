import "./index.scss"
import React from "react"
import { useParams } from "react-router-dom"

import { getActivity, getPerformance, getUser } from "../../services/services"
import { getSessions } from "../../services/services"

import DailyActivity from "../../components/DailyActivity"
import dataDailyActivity from "../../data/DailyActivity.json"

import SessionsAvg from "../../components/SessionsAvg"
import dataSessionTime from "../../data/SessionTime.json"

import ActivityWork from "../../components/ActivityWork"
import dataActivity from "../../data/ActivityWork.json"

import TotalScore from "../../components/TotalScore"
import totalScore from "../../data/totalScore.json"

import foodItems from "../../components/Fuel/fuel.js"

export default function UserPage() {
  const { id } = useParams()
  const { user } = getUser(id)
  const { sessions } = getSessions(id)
  const { activity } = getActivity(id)
  const { performance } = getPerformance(id)

  console.log(user)
  console.log(activity)
  console.log(sessions)
  console.log(performance)

  const DailyActivityData = dataDailyActivity
  const SessionAvgData = dataSessionTime

  const activ = dataActivity
  const totalScoreData = totalScore
  // Datas
  const value = totalScoreData[0].value

  return (
    <>
      <div className="left">
        <section className="welcome">
          <p className="hello">
            Bonjour <span>Prénom</span>
          </p>

          <p className="greetings">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </section>

        <div className="container">
          <section className="activity">
            <h2 className="activity-title">Activité quotidienne</h2>
            <DailyActivity data={DailyActivityData}></DailyActivity>
          </section>
        </div>

        <div className="container">
          <section className="sessions">
            <h2 className="sessions-title">Durée moyenne des sessions</h2>
            <SessionsAvg data={SessionAvgData}></SessionsAvg>
          </section>

          <section className="activity-work">
            <ActivityWork data={activ}></ActivityWork>
          </section>

          <section className="score">
            <h2 className="score-title">Score</h2>
            <TotalScore data={totalScore} valeur={value}></TotalScore>
          </section>
        </div>
      </div>

      <div className="right">
        <section className="fuel">
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
        </section>
      </div>
    </>
  )
}
