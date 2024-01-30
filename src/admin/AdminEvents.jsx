import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAdminCurrentPage, setPaths } from "../Features/AdminNavigationSlice"
import "../assets/styles/admin-events.css"
import { TextField } from "@mui/material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import EventsAdminTable from "../components/EventsAdminTable"
import {
  DateField,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers"
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Start Date" />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="End Date" />
        </LocalizationProvider>
        <button className="search-button">search</button>
      </div>

      <EventsAdminTable />
    </div>
  )
}
