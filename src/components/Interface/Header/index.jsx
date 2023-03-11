import React from "react"
import { Link } from "react-router-dom"
import "./index.scss"

import logo from "../../../assets/logo.png"
import navItems from "./pages"

/**
 * Header component
 * @component Header is in charge of displaying the header of the website
 * @param {string} logo logo of the website
 * @param {array} navItems array of nav objects
 * @param {object} nav grouping path of the page, and name of page
 * @param {string} path page path
 * @param {string} name name of the page
 * @exports Header
 */

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        {navItems.map((nav, index) => (
          <li key={index}>
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
