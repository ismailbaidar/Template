import React from "react"
import {Link} from "react-router-dom"
export default function EventCard(props) {
  return (
    <div className="event-card">
      <div className="background-side">
        <div className="image">
          <img
            src={props.image}
            alt=""
          />
        </div>
      </div>
      <div className="content-side">
        <div className="event-title">{props.title}</div>
        <p className="event-description">
          {props.description}
        </p>
        <div className="location-date">
          <span>{props.location}</span>
          <span>{props.date}</span>
        </div>

        <Link to="single-event" className="reserve-button">Details</Link>

      </div>
    </div>
  )
}
