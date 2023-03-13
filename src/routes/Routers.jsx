import { Routes, Route } from "react-router-dom"

import Layout from "../pages/Layout"
import Homepage from "../pages/Homepage"
import UserPage from "../pages/User"
import NotFound from "../pages/NotFound"

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route index path="profile/:id" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="404" element={<NotFound />} />
        <Route path="error" element={<NotFound />} />
      </Route>
    </Routes>
  )
}