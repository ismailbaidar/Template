import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../assets/styles/card.css"
import { Link } from "react-router-dom"

// import { faYoutube } from  "@fortawesome/free-solid-svg-icons"
import { faYoutube, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
export function Footer() {
  return (
    <>
   


      <footer className="footer">
        <div className="pages-contain">
          <img src="./public/Images/1702198475838.png" alt="" />
        </div>

        <div className="icons-info">
          <div className="icons">
            <a href="https://www.youtube.com/channel/UCQv1YtnzL3peYQRugSkUdpw">
             
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com/groups/2394490134114658">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/company/moroccomicrosoftcommunity/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="parg-footer">
          <p>©Morocco Microsoft Community. </p>
        </div>
      </footer>
    </>
  );
}
