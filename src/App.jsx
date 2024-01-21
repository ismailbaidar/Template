import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import EventTimer from "./components/EventImer"
import "./assets/styles/app.css"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutUs from "./components/AboutUs"
import Event from "./components/Event"
export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<Event />} />
        <Route path="/About" element={<AboutUs/>} />
      </Routes>
    </div>
  )
}
