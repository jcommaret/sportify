import { Outlet } from "react-router-dom"

import Header from "../../components/Interface/Header"
import Sidebar from "../../components/Interface/Sidebar"

import "./index.scss"
/**
 * Layout component is in charge of displaying the layout of the website : header, sidebar and main Outlet
 * @component Layout component
 * @returns {JSX.Element} Layout component
 * @exports Layout component
 */
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
