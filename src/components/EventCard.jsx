import { useEffect } from "react"

export default function EventCard({ event }) {
  useEffect(() => {
    console.log(event)
  })
  return (
    <div className="event-card">
      <div className="background-side">
        <div className="image">
          <img
            style={{ background: "white", objectFit: "contain" }}
            src={event.url}
            alt=""
          />
        </div>
      </div>
      <div className="content-side">
        <div className="event-title">{event.name}</div>
        <p
          className="event-description"
          dangerouslySetInnerHTML={{ __html: event.description }}
        ></p>
        <div className="location-date">
          <span>
            {Math.floor(Math.random() * (100 - 1 + 1) + 1) % 2
              ? "Rabat"
              : "Casa"}
          </span>
          <span>01-JAN-2024</span>
        </div>
        <button className="reserve-button">Reserve your place</button>
      </div>
    </div>
  )
}
