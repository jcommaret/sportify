import "./index.scss"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getActivity, getPerformance, getUser } from "../../services/services"
import { getSessions } from "../../services/services"

import DailyActivity from "../../components/DailyActivity"
import SessionsAvg from "../../components/SessionsAvg"
import ActivityWork from "../../components/ActivityWork"
import TotalScore from "../../components/TotalScore"

import totalScore from "../../data/totalScore.json"

import foodItems from "../../components/Fuel/fuel.js"

export default function UserPage() {
  const { id } = useParams()

  const [firstName, setFirstName] = useState("")
  const [activity, setActivity] = useState([])
  const [sessions, setSessions] = useState([])
  const [performance, setPerformance] = useState([])

  console.log(performance)

  useEffect(() => {
    getUser(id).then((user) => setFirstName(user.firstName))
    getActivity(id).then((activity) => setActivity(activity))
    getSessions(id).then((sessions) => setSessions(sessions))
    getPerformance(id).then((performance) => setPerformance(performance))
  }, [id])

  const totalScoreData = totalScore

  const value = totalScoreData[0].value

  return (
    <>
      <div className="left">
        <section className="welcome">
          <p className="hello">
            Bonjour <span>{firstName}</span>
          </p>

          <p className="greetings">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </section>

        <div className="container">
          <section className="activity">
            <h2 className="activity-title">Activité quotidienne</h2>
            <DailyActivity data={activity}></DailyActivity>
          </section>
        </div>

        <div className="container">
          <section className="sessions">
            <h2 className="sessions-title">Durée moyenne des sessions</h2>
            <SessionsAvg data={sessions}></SessionsAvg>
          </section>

          <section className="activity-work">
            <ActivityWork data={performance}></ActivityWork>
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
