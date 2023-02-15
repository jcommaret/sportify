import { Routes, Route } from "react-router-dom"

import Layout from "../pages/Layout"
import UserPage from "../pages/User"
import Settings from "../pages/Settings"
import Community from "../pages/Community"
import NotFound from "../pages/NotFound"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserPage />} />
        <Route path="profile" element={<UserPage />} />
        <Route path="settings" element={<Settings />} />
        <Route path="community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
