import React from "react"
import "../assets/styles/speakers.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
const speakersData = [
  {
    name: "Said WAHID",
    role: "Consultant Microsoft Cloud AZURE .Net & Office 365",
    image: "../Images/said_wahid.jpg",
    social: {
      facebook: "https://www.facebook.com/saidwahidmaroc",
      linkedin:
        "https://www.linkedin.com/in/said-wahid-a0927715/?originalSubdomain=ma",
      instagram: "https://www.instagram.com/saidwahidmaroc/?hl=en",
    },
  },
  {
    name: "Hassan FADILI",
    role: "MVP Microsoft Cloud AZURE .Net & Office 365",
    image: "../Images/hassan_fadili.jpg",
    social: {
      facebook: "https://www.facebook.com/hassan.fadili.948",
      linkedin:
        "https://www.linkedin.com/in/hassan-fadili-3836422/?originalSubdomain=nl",
      instagram: "https://www.instagram.com/hassanfad11/?hl=en",
    },
  },
  {
    name: "Youssef CHIGANE",
    role: "DATA & AI Consultant",
    image: "../Images/youssef_chigane.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/youssef-chigane/",
    },
  },
  {
    name: "Mohssine MASAAF",
    role: "Consultant .NET Technical Lead",
    image: "../Images/mohssine_masaaf.jpg",
    social: {
      facebook: "https://www.facebook.com/MohssineRealReal",
      linkedin: "https://www.linkedin.com/in/mohssinemasaaf/",
      instagram: "https://www.facebook.com/saidwahidmaroc",
    },
  },
  {
    name: "Outman BAZZAZ",
    role: "DATA & Business Intelligence Expert",
    image: "../Images/outman_bazzaz.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/outmanbaz/",
    },
  },
  {
    name: "Anas BELABBES",
    role: "MVP Microsoft",
    image: "../Images/anas_belabbes.jpg",
    social: {
      facebook: "https://www.facebook.com/anas.belabbes",
      linkedin: "https://www.linkedin.com/in/anasbelabbes/",
      instagram: "https://www.facebook.com/saidwahidmaroc",
    },
  },
]

const Speaker = ({ name, role, image, social }) => (
  <div className="speakers-cards">
    <div className="tic-tac">
      <img src={image} width={200} alt={name} />
    </div>
    <div className="info-said">
      <h5>{name}</h5>
      <p>{role}</p>
    </div>
    <div className="nav-Social">
      {Object.entries(social).map(([platform, link]) => (
        <div key={platform} className={platform}>
          <a href={link}>
            {platform === "email" ? (
              <FontAwesomeIcon icon={faEnvelope} />
            ) : platform === "facebook" ? (
              <FontAwesomeIcon icon={faFacebook} />
            ) : platform === "linkedin" ? (
              <FontAwesomeIcon icon={faLinkedin} />
            ) : platform === "instagram" ? (
              <FontAwesomeIcon icon={faInstagram} />
            ) : null}
          </a>
        </div>
      ))}
    </div>
  </div>
)

function speakers() {
  return (
    <>
      <section>
        <div className="speakers-container">
          <div className="titel">
            <h3> Our Speakers</h3>
          </div>

          <div className="card-container">
            {speakersData.map((speaker, index) => (
              <Speaker key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default speakers
