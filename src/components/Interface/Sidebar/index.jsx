import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom"

import sidebarItems from "./pages"

import "./index.scss"

/**
 * Header component
 * This component is the header of the website
 * It contains the logo and the navigation links
 * It is used in the Layout component
 * @component
 */
export default function Sidebar() {
  Sidebar.propTypes = {
    sidebarItems: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    icon: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }
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
