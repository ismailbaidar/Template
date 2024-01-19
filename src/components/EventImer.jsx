import TimerPart from "./TimerPart"
import "../assets/styles/event-timer.css"
export default function EventTimer({ date }) {
  return (
    <div className="event-timer-container">
      <h1>Event Name</h1>
      <span className="event-timer">
        <TimerPart title="Days" value="1"></TimerPart>
        <TimerPart title="Hours" value="2"></TimerPart>
        <TimerPart title="Minutes" value="3"></TimerPart>
        <TimerPart title="Seconds" value="4"></TimerPart>
      </span>
    </div>
  )
}
