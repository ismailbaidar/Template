import React from "react"
import "../assets/styles/event.css"
import EventCard from "./EventCard"

const Event = () => {
  const eventData = {
    title: "Tech Conference 2024",
    date: "2024-05-15",
    location: "Ensa Beni Mellal, Beni Mellal",
    description: "Join us for the biggest tech conference of the year.",
    image: "../Images/Blue.jpg",
  }

  const { title, date, location, description, image } = eventData

  return (
    <section className="event-container">
      <div className="">
        <h1 className="subtitle">Event</h1>
        <h1 className="title">Tike Your Ticket Now And Enjoy</h1>
      </div>
      <div className="cardO-container">
        <EventCard title={title} date={date} location={location} description={description} image={image} />
        <EventCard title={title} date={date} location={location} description={description} image={image} />
        <EventCard title={title} date={date} location={location} description={description} image={image} />
        <EventCard title={title} date={date} location={location} description={description} image={image} />
        <EventCard title={title} date={date} location={location} description={description} image={image} />
      
      </div>
    </section>
  )
}

export default Event
