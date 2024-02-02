import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAdminCurrentPage, setPaths } from "../Features/AdminNavigationSlice"
import { TextField } from "@mui/material"
import {
  DateField,
  DatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { TextareaAutosize } from "@mui/base"
import "../assets/styles/create-event-admin.css"
import TextEditor from "../components/TextEditor"
import EventSessionPage from "./EventSessionPage"
export default function EditEventAdmin() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAdminCurrentPage("events"))
    dispatch(setPaths(["Dashboard", "Events", "Edit"]))
  }, [])
  return (
    <div className="create-event-admin">
      <div className="form-title">Edit Event</div>
      <TextField type="outlined" label="Event Name" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Start Date" />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="End Date" />
      </LocalizationProvider>
      <TextEditor />
      <div className="event-sessions-table">
        <EventSessionPage />
      </div>

      <button className="add-event-button">Edit Event</button>
    </div>
  )
}
