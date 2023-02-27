import "./index.scss"
import React from "react"
import { useParams } from "react-router-dom"

import users from "../../data/user.json"

import DailyActivity from "../../components/DailyActivity"
import dataDailyActivity from "../../data/DailyActivity.json"

import SessionsAvg from "../../components/SessionsAvg"
import dataSessionTime from "../../data/SessionTime.json"

import ActivityWork from "../../components/ActivityWork"
import dataActivity from "../../data/ActivityWork.json"

import TotalScore from "../../components/TotalScore"
import totalScore from "../../data/totalScore.json"

export default function UserPage() {
  const id = useParams().id
  const userList = users
  const user = userList[id]

  const DailyActivityData = dataDailyActivity
  const SessionAvgData = dataSessionTime

  const Activity = dataActivity
  const totalScoreData = totalScore
  // Datas
  const value = totalScoreData[0].value
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
          <DailyActivity data={DailyActivityData}></DailyActivity>
        </section>
      </div>

      <div className="container">
        <section className="sessions">
          <h2 className="sessions-title">Durée moyenne des sessions</h2>
          <SessionsAvg data={SessionAvgData}></SessionsAvg>
        </section>

        <section className="activity-work">
          <ActivityWork data={Activity}></ActivityWork>
        </section>

        <section className="score">
          <h2 className="score-title">Score</h2>
          <TotalScore data={totalScore} valeur={value}></TotalScore>
        </section>
      </div>
    </>
  )
}
