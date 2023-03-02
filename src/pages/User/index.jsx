import "./index.scss"
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import {
  getActivity,
  getObjectifs,
  getPerformance,
  getUser,
  getKeyFigures,
} from "../../services/services"
import { getSessions } from "../../services/services"

import DailyActivity from "../../components/DailyActivity"
import SessionsAvg from "../../components/SessionsAvg"
import ActivityWork from "../../components/ActivityWork"
import TotalScore from "../../components/TotalScore"
import Fuel from "../../components/Fuel"

export default function UserPage() {
  const { id } = useParams()

  const [firstName, setFirstName] = useState("")
  const [activity, setActivity] = useState([])
  const [sessions, setSessions] = useState([])
  const [performance, setPerformance] = useState([])
  const [valeur, setValeur] = useState("")
  const [keyFigures, setKeyFigures] = useState([])

  useEffect(() => {
    getUser(id).then((user) => setFirstName(user.firstName))
    getActivity(id).then((activity) => setActivity(activity))
    getSessions(id).then((sessions) => setSessions(sessions))
    getPerformance(id).then((performance) => setPerformance(performance))
    getObjectifs(id).then((valeur) => setValeur(valeur))
    getKeyFigures(id).then((keyFigures) => setKeyFigures(keyFigures))
  }, [id])

  console.log(keyFigures)

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
            <TotalScore valeur={valeur}></TotalScore>
          </section>
        </div>
      </div>

      <div className="right">
        <Fuel data={keyFigures}></Fuel>
      </div>
    </>
  )
}
