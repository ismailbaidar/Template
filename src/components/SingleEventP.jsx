import React from 'react'
import "../assets/styles/single-Eventp.css"
import { faBullhorn, faCalendarCheck,faLocationDot,faHourglassHalf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

function SingleEventP() {
  const eventData = {
    title: "Global AI Bootcamp 2024",
    date: " Vendredi 2024-04-26 . 09:00 - 17:30 UCT+1",
    location: "Tanger in Morocco ,Technopark Tanger",
    description: "Morocco Microsoft Community is very honored to announce that we again will host Global AI Bootcamp 2024 Event on April 26th, 2024 at Technopark Tanger, Morocco. During this event several sessions will be provided with demo's and eventual workshops by community peers and speakers (MVPs and MCTs from Morocco Microsoft Communiy and others) AI is one of the most important fields of Microsoft nowadays, therefore we want to raise awareness on this technology stack by sharing the last news, technology and functional benefits of AI, ML,, MLOps, Azure OpenAI, Copilot, ChatGPT....and more.Don't miss this day and be part of our audience.Stay tuned for registration soon on our website.We hope to see you all there.Cheers,Hassan Fadili Morocco Microsoft Community Leader",
    image: "tanger.jpg",
    sessions: [
      {
        id: 1,
        sessionName: "Session 1",
        description: "Description 1",
        address: "Address 1",
        startDate: "2024-02-15 09:00 PM",
        endDate: "2024-02-17 14:00 PM"
      },
      {
        id: 2,
        sessionName: "Session 2",
        description: "Description 2",
        address: "Address 2",
        startDate: "2024-02-15 14:30 PM",
        endDate: "2024-02-17 17:00 PM"
      },

    ]
  };

  return (
    <div className='container-single'>
      <div className='event-image-container'>
        <div className='img-Contain-sides'>
          <img src={`/../Images/${eventData.image}`} alt={eventData.title} className="event-image" />

        </div>
      </div>
      <div className='event-place'>
        <div className='back-grouned-place'>
          <FontAwesomeIcon icon={faBullhorn} />
          <h4>les places restantes : 15</h4>
        </div>

      </div>
      <div className='session-container'>
        <Typography className='session-titel' variant="h5">Sessions</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Session Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>Fin Time</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {eventData.sessions.map(session => (
                <TableRow key={session.id}>
                  <TableCell>{session.sessionName}</TableCell>
                  <TableCell>{session.description}</TableCell>
                  <TableCell>{session.address}</TableCell>
                  <TableCell>{session.startDate}</TableCell>
                  <TableCell>{session.endDate}</TableCell>
                  <button className='btn-register'> Register</button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="details-container-header">

        <div className='event-content'>
          <h2>{eventData.title}</h2>


        </div>
        <div className='event-info-side'>
          <div className='sidebar-content'>
            
              <h2>Access Gratuit</h2>
              <button className='btn-register-now'>
                    Get the Ticket
              </button>

            
          </div>

        </div>

      </div>
      <div className='time-event'>
        <h2>Date et heure</h2>
        <div className='time-container'>
          <FontAwesomeIcon icon={faCalendarCheck} />
          <p>{eventData.date}</p>
        </div>
                <div className='space'></div>
      </div>
      <div className='time-event'>
        <h2>Lieu</h2>
        <div className='time-container'>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{eventData.location}</p>
        </div>

      </div>
      <div className='detail-container-body'>
            <h1>
            À propos de cet évènement
            </h1>
            <div className='time-container'>
              <FontAwesomeIcon icon={faHourglassHalf}/>
              <h4>7 heures 30 minutes</h4>

            </div>
            <div className='local-container'>
              <p>{eventData.description}</p>
            </div>
      </div>
    </div>
  );

}

export default SingleEventP