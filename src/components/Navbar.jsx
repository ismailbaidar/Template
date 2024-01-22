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
        <img src="../Images/1702198475838.png" width={100} alt="" />
      </Link>

      <ul className=" align-center justify-center  text-black nav-links flex gap-3">
        <li data-current={page == "Home"}>
          <Link onClick={() => dispatch(setCurrentPage("Home"))} to="/">
            Home
          </Link>
        </li>
        <li data-current={page == "Events"}>
          <Link onClick={() => dispatch(setCurrentPage("Events"))} to="events">
            Events
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
    </nav>
  )
}
