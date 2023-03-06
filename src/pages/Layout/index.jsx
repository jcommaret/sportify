import { Outlet } from "react-router-dom"

import Header from "../../components/Interface/Header"
import Sidebar from "../../components/Interface/Sidebar"

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
