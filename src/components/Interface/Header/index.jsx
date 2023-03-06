import React from "react"
import { Link } from "react-router-dom"

import "./index.scss"

import logo from "../../../assets/logo.png"
import navItems from "./pages"

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
