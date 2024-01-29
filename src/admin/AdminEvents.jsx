import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAdminCurrentPage, setPaths } from "../Features/AdminNavigationSlice"
import "../assets/styles/admin-events.css"
import { TextField } from "@mui/material"
import EventsAdminTable from "../components/EventsAdminTable"
import { Link } from "react-router-dom"
export default function AdminEvents() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAdminCurrentPage("events"))
    dispatch(setPaths(["Dashboard", "Events"]))
  }, [])
  return (
    <div className="admin-events">
      <div className="title-create-new">
        <span className="title">Events</span>
        <Link to="create" className="create-new-button">
          Create New
        </Link>
      </div>

      <div className="search-area">
        <TextField type="outlined" label="search" />
        <button className="search-button">search</button>
      </div>

      <EventsAdminTable />
    </div>
  )
}
