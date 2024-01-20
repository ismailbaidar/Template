import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import EventTimer from "./components/EventImer"
import "./assets/styles/app.css"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Login from "./Pages/Login"
export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<h1>This is the events page</h1>} />
        <Route path="/About" element={<h1>About Page</h1>} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  )
}
