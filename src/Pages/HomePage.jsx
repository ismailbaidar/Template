import Cards from "../components/Cards"
import EventTimer from "../components/EventImer"
import Stats from "../components/Stats"
export default function HomePage() {
  return (
    <div className="grid gap-5">
      <EventTimer time=""></EventTimer>
      <Cards />
      <Stats />
      

    </div>
  )
}
