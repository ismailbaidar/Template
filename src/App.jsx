import Navbar from "./components/Navbar"
import EventTimer from "./components/EventImer"
import "./assets/styles/app.css"
import { Routes, Route } from "react-router-dom"
export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<EventTimer time=""></EventTimer>} />
        <Route path="/Events" element={<h1>This is the events page</h1>} />
      </Routes>
    </div>
  )
}
