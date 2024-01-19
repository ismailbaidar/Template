import TimerPart from "./TimerPart"
import "../assets/styles/event-timer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
export default function EventTimer({ date }) {
  return (
    <div className="event-timer-container">
      <div className="info-part">
        <h1 className="subtitle">Event</h1>
        <h1 className="title">Here The Event's Title</h1>
      </div>
      <span className="event-timer">
        <TimerPart title="Days" value="12"></TimerPart>
        <TimerPart title="Hours" value="20"></TimerPart>
        <TimerPart title="Minutes" value="32"></TimerPart>
        <TimerPart title="Seconds" value="40"></TimerPart>
      </span>
      <div className="location-button">
        <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 font-bold">
          Reserve You place
        </button>
        <div className="location grid gap-2">
          <span className="date text-transparent font-bold bg-gradient-to-r from-sky-500 to-indigo-500">
            01-JAN-2024
          </span>
          <span className="flex justify-between gap-[1rem]">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="text-lg">Somewhere in world ,city</span>
          </span>
        </div>
      </div>
    </div>
  )
}
