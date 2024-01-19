import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router } from 'react-router-dom';
import EventTimer from "./components/EventImer"
import './assets/styles/app.css'
export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <EventTimer time=""></EventTimer>
      <Cards></Cards>
    </div>
  )
}
