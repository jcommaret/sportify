import "./index.scss"
import React from "react"
import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <>
      <ul className="userchoice">
        <Link to="profile/12">Profile 12</Link>
        <Link to="profile/18">Profile 18</Link>
      </ul>
    </>
  )
}
