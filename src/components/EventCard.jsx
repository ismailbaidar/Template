export default function EventCard() {
  return (
    <div className="event-card">
      <div className="background-side">
        <div className="image">
          <img
            src="https://images.immediate.co.uk/production/volatile/sites/10/2023/06/2048x1365-Oak-trees-SEO-GettyImages-90590330-b6bfe8b.jpg?quality=90&resize=940,627"
            alt=""
          />
        </div>
      </div>
      <div className="content-side">
        <div className="event-title">Event title</div>
        <p className="event-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          voluptatibus accusamus quis provident deserunt facilis vel, vitae quod
          quo aspernatur.
        </p>
        <div className="location-date">
          <span>Rabat </span>
          <span>01-JAN-2024</span>
        </div>
        <button className="reserve-button">Reserve your place</button>
      </div>
    </div>
  )
}
