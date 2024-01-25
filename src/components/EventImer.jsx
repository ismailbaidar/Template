import TimerPart from "./TimerPart"
import "../assets/styles/event-timer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
export default function EventTimer({ date }) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDaysFunction()
      setHoursFunction()
      setMinutesFunction()
      setSecondsFunction()
    }, 1000)

    return () => clearInterval(intervalId)
  }, [date])

  function setDaysFunction() {
    const currentDate = new Date()
    const eventDate = new Date(date)
    const diffDate = Math.abs(
      Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
      ) -
        Date.UTC(
          eventDate.getFullYear(),
          eventDate.getMonth(),
          eventDate.getDate()
        )
    )

    setDays(diffDate / (1000 * 60 * 60 * 24))
  }
  function setHoursFunction() {
    const currentHours = new Date().getHours()
    setHours(24 - currentHours)
  }

  function setMinutesFunction() {
    const currentMinutes = new Date().getMinutes()
    setMinutes(60 - currentMinutes)
  }
  function setSecondsFunction() {
    const currentSeconds = new Date().getSeconds()
    setSeconds(60 - currentSeconds)
  }
  return (
    <div className="event-timer-container">
      <div className="info-part">
        <h1 className="subtitle">Event</h1>
        <h1 className="title">Here The Event's Title</h1>
      </div>
      <span className="event-timer">
        <TimerPart title="Days" value={`${days}`}></TimerPart>
        <TimerPart title="Hours" value={`${hours}`}></TimerPart>
        <TimerPart title="Minutes" value={`${minutes}`}></TimerPart>
        <TimerPart title="Seconds" value={`${seconds}`}></TimerPart>
      </span>
      <div className="location-button">
        <button className="btn  font-bold">Reserve You place</button>
        <div className="location grid gap-2">
          <span className="date text-transparent font-bold ">01-JAN-2024</span>
          <span className="flex justify-between gap-[1rem]">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="text-lg">Somewhere in world ,city</span>
          </span>
        </div>
      </div>
    </div>
  )
}
