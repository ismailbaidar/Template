import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import EventTimer from "./components/EventImer"
import "./assets/styles/app.css"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Footer from "./components/Footer"
import Login from "./Pages/Login"
import MainRoutes from "./components/MainRoutes"
import Register from "./Pages/Register"
export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/*" element={<MainRoutes />} />
        {/* the routes below gonna be displayed without the navbar and footer components */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}
