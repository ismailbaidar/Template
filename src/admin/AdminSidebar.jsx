import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import "../assets/styles/admin-sidebar.css"
import {
  faCalendar,
  faChevronLeft,
  faChevronRight,
  faMicrophone,
  faPersonChalkboard,
  faRightFromBracket,
  faTableColumns,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setAdminCurrentPage, setPaths } from "../Features/AdminNavigationSlice"
export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const page = useSelector((state) => state.AdminNavigationReducer.currentPage)
  const dispatch = useDispatch()
  return (
    <div
      className="admin-sidebar"
      style={{
        width: isCollapsed ? "5%" : "20%",
      }}
    >
      <button
        className="hide-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <FontAwesomeIcon icon={faChevronRight} />
        ) : (
          <FontAwesomeIcon icon={faChevronLeft} />
        )}
      </button>
      <div className="upper-part">
        <div className="logo-part" data-collaped={isCollapsed}>
          <img
            src={
              isCollapsed
                ? "/../Images/logo-only.png"
                : "/../Images/1702198475838.png"
            }
            width={isCollapsed ? 30 : 100}
            alt=""
          />
        </div>
        <ul className="navigation-part">
          <Link to="">
            <li
              className="navigation-item"
              data-current-page={"dashboard" == page}
            >
              {" "}
              <FontAwesomeIcon icon={faTableColumns} />{" "}
              {!isCollapsed && <span>Dashboard</span>}
            </li>
          </Link>
          <Link to="/admin/events" onClick={() => {}}>
            <li
              className="navigation-item"
              data-current-page={"events" == page}
            >
              <FontAwesomeIcon icon={faMicrophone} />{" "}
              {!isCollapsed && <span>Events</span>}
            </li>
          </Link>
          <li className="navigation-item">
            <FontAwesomeIcon icon={faPersonChalkboard} />{" "}
            {!isCollapsed && <span>Speakers</span>}
          </li>
          <li className="navigation-item">
            <FontAwesomeIcon icon={faUsers} />{" "}
            {!isCollapsed && <span>Users</span>}
          </li>
          <li className="navigation-item">
            <FontAwesomeIcon icon={faCalendar} />{" "}
            {!isCollapsed && <span>Calendar</span>}
          </li>
        </ul>
      </div>
      <button className="logout">
        <FontAwesomeIcon icon={faRightFromBracket} />
        <span>{!isCollapsed && "Logout"}</span>
      </button>
    </div>
  )
}
