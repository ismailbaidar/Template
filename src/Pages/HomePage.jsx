import Footer from "../components/Footer"
import Cards from "../components/Cards"
import EventTimer from "../components/EventImer"
import Stats from "../components/Stats"
import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setFromLogout } from "../Features/AuthSlice"
export default function HomePage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setFromLogout(false))
  })
  return (
    <div className="grid ">
      <Navbar></Navbar>
      <div className="grid gap-5">
              <EventTimer date="2024-04-6"></EventTimer>
        <Cards />
        <Stats />
      </div>
      <Footer />
    </div>
  )
}
