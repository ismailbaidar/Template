import "../assets/styles/navbar.css"
import { useSelector, useDispatch } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { useEffect } from "react"
import { setCurrentPage } from "../Features/NavigationSlice"
export default function Navbar() {
  const dispatch = useDispatch()
  const page = useSelector((state) => {
    return state.NavigationReducer.currentPage
  })
  useEffect(() => {
    console.log(page)
  }, [page])
  return (
    <nav className="shadow-md  flex align-center text-white overflow-hidden justify-between">
      <Link
        className="text-black logo-holder"
        to="/"
        onClick={() => dispatch(setCurrentPage("Home"))}
      >
        <img src="../Images/white-text-logo2.png" width={100} alt="" />
      </Link>

      <ul className=" align-center justify-center  text-black nav-links flex gap-3">
        <li data-current={page == "Home"}>
          <Link onClick={() => dispatch(setCurrentPage("Home"))} to="/">
            Home
          </Link>
        </li>
        <li data-current={page == "Events"}>
          <Link
            onClick={() => dispatch(setCurrentPage("Events"))}
            to="/page/events"
          >
            Events
          </Link>
        </li>
        <li
          data-current={page == "Speakers"}
          onClick={() => dispatch(setCurrentPage("Speakers"))}
        >
          <Link
            onClick={() => dispatch(setCurrentPage("Events"))}
            to="/page/speakers"
          >
            Speakers
          </Link>
        </li>
        <li
          data-current={page == "About"}
          onClick={() => dispatch(setCurrentPage("About"))}
        >
          <Link onClick={() => dispatch(setCurrentPage("Events"))} to="About">
            About
          </Link>
        </li>
      </ul>
      <div className="authentication-buttons">
        <button className="sign-in">
          <Link to="/login">Sign in</Link>
        </button>
        <button className="sign-up">
          <Link to="/register">Sign Up</Link>
        </button>
      </div>
    </nav>
  )
}
