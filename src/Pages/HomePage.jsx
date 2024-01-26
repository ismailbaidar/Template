import Footer from "../components/Footer"
import Cards from "../components/Cards"
import EventTimer from "../components/EventImer"
import Stats from "../components/Stats"
import Navbar from "../components/Navbar"
export default function HomePage() {
  return (
    <div className="grid ">
      <Navbar></Navbar>
      <div className="grid gap-5">
        <EventTimer date="2024-02-9"></EventTimer>
        <Cards />
        <Stats />
      </div>
      <Footer />
    </div>
  )
}
