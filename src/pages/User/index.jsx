import React from "react"
import { useParams } from "react-router-dom"
import users from "../../data/user.json"
import "./index.scss"

export default function UserPage() {
  const id = useParams().id
  const userList = users
  const user = userList[id]
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
          <p class="greetings">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        )}
      </section>

      <section className="activity">
        <h2 className="title">Activité quotidienne</h2>
      </section>
    </>
  )
}
