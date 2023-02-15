import React from "react"
import { Link } from "react-router-dom"

import "./index.scss"

import logo from "../../assets/logo.png"

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/profile">Profil</Link>
        </li>
        <li>
          <Link to="/Settings">Réglages</Link>
        </li>
        <li>
          <Link to="/Community">Communauté</Link>
        </li>
      </ul>
    </header>
  )
}
