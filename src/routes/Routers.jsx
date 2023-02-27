import { Routes, Route } from "react-router-dom"

import Layout from "../pages/Layout"
import UserPage from "../pages/User"
import Settings from "../pages/Settings"
import Community from "../pages/Community"
import NotFound from "../pages/NotFound"
import Homepage from "../pages/Homepage"

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route index path="profile/:id" element={<UserPage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
