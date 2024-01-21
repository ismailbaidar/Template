import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import "../assets/styles/footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
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
  )
}
