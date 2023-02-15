import { Outlet } from "react-router-dom"

import "./index.scss"

export default function Layout() {
  return (
    <div className="wrapper">
      <p>Layout</p>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
