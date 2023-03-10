import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./index.scss"

import logo from "../../../assets/logo.png"
import navItems from "./pages"

/**
 * Header component
 * @component Header is in charge of displaying the header of the website
 * @exports Header
 */

export default function Header() {
  Header.propTypes = {
    logo: PropTypes.string.isRequired,
    navItems: PropTypes.array.isRequired,
    nav: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }
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
