import React from "react"
import { useParams } from "react-router-dom"
import users from "../../data/user.json"
import "./index.scss"

import {
  BarChart,
  Legend,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

const data = [
  {
    serie: "1",
    calories: 2000,
    weight: 2400,
  },
  {
    serie: "2",
    calories: 3000,
    weight: 1398,
  },
  {
    serie: "3",
    calories: 9800,
    weight: 2000,
  },
  {
    serie: "4",
    calories: 2780,
    weight: 3908,
  },
  {
    serie: "5",
    calories: 1890,
    weight: 4800,
  },
  {
    serie: "6",
    calories: 2390,
    weight: 3800,
  },
  {
    serie: "7",
    calories: 3490,
    weight: 4300,
  },
  {
    serie: "8",
    calories: 3490,
    weight: 4300,
  },
  {
    serie: "9",
    calories: 3490,
    weight: 4300,
  },
  {
    serie: "10",
    calories: 3490,
    weight: 4300,
  },
]

export default function UserPage() {
  const id = useParams().id
  const userList = users
  const user = userList[id]
  // Datas

  const name = user.name
  const yesterday = user.yesterday

  //

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
          <h2 className="title">Activité quotidienne</h2>

          <BarChart width={835} height={300} data={data}>
            <Legend />
            <CartesianGrid strokeDasharray="3" />
            <XAxis dataKey="serie" />
            <Tooltip dataKey="serie" />
            <Bar barSize={7} dataKey="calories" fill="#282D30" />
            <Bar barSize={7} dataKey="weight" fill="#E60000" />
            <YAxis dataKey="weight" />
          </BarChart>
        </section>
      </div>

      <div className="container">
        <section className="sessions">
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
