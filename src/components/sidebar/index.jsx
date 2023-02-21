import React from "react"
import { Link } from "react-router-dom"

import sidebarItems from "./pages"

import "./index.scss"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        {sidebarItems.map((icon, index) => (
          <li key={index}>
            <Link to={icon.path}>
              <img src={icon.img} alt={icon.desc} />
            </Link>
          </li>
        ))}
      </ul>
      <p class="footer">Copyright, SportSee 2020</p>
    </aside>
  )
}
