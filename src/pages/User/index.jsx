/* import scss file */
import "./index.scss"

/* import react  */
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

/* import services */
import {
  getActivity,
  getObjectifs,
  getPerformance,
  getUser,
  getKeyFigures,
  getSessions,
} from "../../services/services"

/* import components */
import DailyActivity from "../../components/Graphiques/DailyActivity"
import SessionsAvg from "../../components/Graphiques/SessionsAvg"
import ActivityWork from "../../components/Graphiques/ActivityWork"
import TotalScore from "../../components/Graphiques/TotalScore"
import Fuel from "../../components/Graphiques/Fuel"

/** 
 * This function is defining userpage
 * it use id as parameter to get data from api
 
* Then it use useState to set data in the state
 * firstName, activity, sessions, performance, score, keyFigures
 * 
 * Then it use useEffect to get data from api and set it in the state and render it
 * 
*/

export default function UserPage() {
  const { id } = useParams()
  const [firstName, setFirstName] = useState("")
  const [activity, setActivity] = useState([])
  const [sessions, setSessions] = useState([])
  const [performance, setPerformance] = useState([])
  const [score, setScore] = useState("")
  const [keyFigures, setKeyFigures] = useState([])

  useEffect(() => {
    getUser(id).then((user) => setFirstName(user.firstName))
    getActivity(id).then((activity) => setActivity(activity))
    getSessions(id).then((sessions) => setSessions(sessions))
    getPerformance(id).then((performance) => setPerformance(performance))
    getObjectifs(id).then((score) => setScore(score))
    getKeyFigures(id).then((keyFigures) => setKeyFigures(keyFigures))
  }, [id])

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
            <TotalScore data={score}></TotalScore>
          </section>
        </div>
      </div>

      <div className="right">
        <Fuel data={keyFigures}></Fuel>
      </div>
    </>
  )
}
