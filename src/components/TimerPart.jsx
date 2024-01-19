import { faSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../assets/styles/timer-part.css"
export default function TimePart({ title, value }) {
  return (
    <span className="timer-part">
      <span className="count-down">
        <div className="square bg-gradient-to-r from-sky-500 to-indigo-500 to-indigo-500">
          <span>
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 to-indigo-500 text-transparent">
              {value}
            </div>
          </span>
        </div>
      </span>
      <span className="count-down-name">{title}</span>
    </span>
  )
}
