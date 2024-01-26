import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import AdminSidebar from "./AdminSidebar"

export default function AdminRoutes() {
  return (
    <>
      <AdminSidebar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}
