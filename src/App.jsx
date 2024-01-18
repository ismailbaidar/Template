import Navbar from "./components/Navbar"
import EventTimer from "./components/EventImer"
import './assets/styles/app.css'
export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <EventTimer time=""></EventTimer>
    </div>
  )
}
