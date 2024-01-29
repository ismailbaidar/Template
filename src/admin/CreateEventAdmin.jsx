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
export default function CreateEventAdmin() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAdminCurrentPage("events"))
    dispatch(setPaths(["Dashboard", "Events", "Create"]))
  }, [])
  return (
    <div className="create-event-admin">
      <div className="form-title">Create event</div>
      <TextField type="outlined" label="Event Name" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Start Date" />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="End Date" />
      </LocalizationProvider>
      <TextEditor />
    </div>
  )
}
