import NotFoundSvg from "../components/NotFoundSvg"
import "../assets/styles/error-page.css"
import UnauthorizedSvg from "../components/UnauthorizedSvg"
import { Link } from "react-router-dom"

export default function ErrorPage({ code }) {
  return (
    <div className="error-page">
      <div className="image-container">
        {code == "404" ? <NotFoundSvg></NotFoundSvg> : <UnauthorizedSvg />}
      </div>

      <div className="description">
        <div className="big-title">
          <span>OOPS,</span>
          <span>
            <span className="colored">No</span> <span>authorization found</span>
          </span>
        </div>
        <span>
          <p>This page is not pulblically availlable</p>
          <p>To access it please login first </p>
        </span>
        <button>
          <Link to="/">Back to home</Link>
        </button>
      </div>
    </div>
  )
}
