import React from "react"
import "../assets/styles/event.css"
import EventCard from "./EventCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllEvents } from "../Features/EventSlice"

const Event = () => {
  const events = useSelector((state) => state.EventReducer.events)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllEvents())
  }, [])
  const eventData = {
    title: "Tech Conference 2024",
    date: "2024-05-15",
    location: "Ensa Beni Mellal, Beni Mellal",
    description: "Join us for the biggest tech conference of the year.",
    image: "Blue.jpg",
  }

  const { title, date, location, description, image } = eventData

  return (
    <section className="event-container">
      <div className="">
        <h1 className="subtitle">Event</h1>
        <h1 className="title">Tike Your Ticket Now And Enjoy</h1>
      </div>
      <div className="cardO-container">
        {events.map((event) => {
          return <EventCard event={event} />
        })}
      </div>
    </section>
  )
}

export default Event
