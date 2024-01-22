import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import EventTimer from "./components/EventImer"
import "./assets/styles/app.css"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutUs from "./components/AboutUs"
import MainRoutes from "./components/MainRoutes"
import { useSelector, useDispatch } from "react-redux"
import Event from "./components/Event"
import Footer from "./components/Footer"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import { useEffect, useState } from "react"
import { setCurrentPage } from "./Features/NavigationSlice"
export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/About" element={<AboutUs/>} />
        <Route path="/*" element={<MainRoutes />} />
        {/* the routes below gonna be displayed without the navbar and footer components */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}
