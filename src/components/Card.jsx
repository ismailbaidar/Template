import "../assets/styles/card.css"
import { Link } from "react-router-dom"

// import { faYoutube } from  "@fortawesome/free-solid-svg-icons"
export default function Card() {
  const description =
    "something interesting information about this eventsomething interesting information about this eventsomething interesting information about this eventsomething interesting information about this eventsomething interesting information about this eventsomething interesting information about this eventsomething interesting information about this eventsomething interesting information about this eventsomething interesting information about this eventsomething interesting information about this eventsomething interesting information about this eventsomething interesting information about this event eventeventeventeventeventeventeventeventeventeventevent"
  return (
    <>
      <div className="card">
        <div className="background-holder"></div>
        <div className="date-square">
          <span>22</span>
          <span>Mar</span>
        </div>
        <div className="card-info">
          <div className="card-event-info">
            <div className="event-title">Here Event Name</div>
            <div className="event-description">
              {description.length > 200
                ? description.substring(0, 200) + "..."
                : description}
            </div>
          </div>
          <div className="speakers">
            <span className="speaker-circle-image">
              <img src="./public/Images/said_wahid.jpg" width={100} alt="" />
            </span>
          </div>
        </div>

      </div>
    </>
  )
}
