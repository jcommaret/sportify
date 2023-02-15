import { Outlet } from "react-router-dom"

import Header from "../../components/header"
import Sidebar from "../../components/sidebar"

import "./index.scss"

export default function Layout() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  )
}
