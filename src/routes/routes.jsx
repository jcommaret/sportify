import { Routes, Route } from "react-router-dom"

import Layout from "../pages/Layout"
import User from "../pages/User"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<User />} />
        </Route>
      </Routes>
    </>
  )
}
