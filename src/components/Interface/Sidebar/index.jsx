import React from "react"
import { Link } from "react-router-dom"
import sidebarItems from "./pages"
import "./index.scss"

/**
 * Sidebar component
 * @component Sidebar is in charge of displaying the sidebar of the website
 * @param {array} sidebarItems array of icon array 
 * @param {Array.<{img: string, path: string, desc:string}>} Icon array of icon
 * @returns {JSX.Element} Sidebar component
 * @exports Sidebar
 */

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
      <p className="footer">Copyright, SportSee 2020</p>
    </aside>
  )
}
