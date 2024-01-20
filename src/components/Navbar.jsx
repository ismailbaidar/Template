import "../assets/styles/navbar.css"
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="shadow-md  flex align-center text-white overflow-hidden justify-between">
      <span className="text-black logo-holder">LOGO</span>
      <ul className=" align-center justify-center  before:bg-gradient-to-r from-sky-500 to-indigo-500 nav-links flex gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="events">Events</Link>
        </li>
        <li>
          <Link to="About">About</Link>
        </li>
      </ul>
    </nav>
  )
}
