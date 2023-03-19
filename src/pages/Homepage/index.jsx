import "./index.scss"
import React from "react"
import { Link } from "react-router-dom"
/**
 * Homepage component is in charge of displaying the homepage of the application displaying the 2 profiles available
 * @component Homepage component 
 * @returns {JSX.Element} Homepage component
 * @exports Homepage
 */
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
