import React from 'react';
import '../assets/styles/event.css';

const Event = () => {

  const eventData = {
    title: "Tech Conference 2024",
    date: "2024-05-15",
    location: "Ensa Beni Mellal, Beni Mellal",
    description: "Join us for the biggest tech conference of the year.",
    image: "Blue.jpg"
  };

  const { title, date, location, description, image } = eventData;

  return (
    <section>

      <div className="event-container">
        <h1 className="subtitle">Event</h1>
        <h1 className="title">Tike Your Ticket Now And Enjoy</h1>
      </div>
      <div className="cardO-container">
        <div className="cardO">
          <div className="cardO-preview">

          </div>
          <div className="cardO-info">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h5>{date}</h5>
            <h2>{location}</h2>
            <button className='btn'> Order Now</button>

          </div>
        </div>
        <div className="cardO">
          <div className="cardO-preview">

          </div>
          <div className="cardO-info">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h5>{date}</h5>
            <h2>{location}</h2>
            <button className='btn'> Order Now</button>

          </div>
        </div>
        <div className="cardO">
          <div className="cardO-preview">

          </div>
          <div className="cardO-info">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h5>{date}</h5>
            <h2>{location}</h2>
            <button className='btn'> Order Now</button>

          </div>
        </div>
        <div className="cardO">
          <div className="cardO-preview">

          </div>
          <div className="cardO-info">
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h5>{date}</h5>
            <h2>{location}</h2>
            <button className='btn'> Order Now</button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Event;
