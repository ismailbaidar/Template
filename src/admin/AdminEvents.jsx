import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAdminCurrentPage, setPaths } from "../Features/AdminNavigationSlice"

export default function AdminEvents() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setAdminCurrentPage("events"))
    dispatch(setPaths(["Dashboard", "Events"]))
  }, [])
  return <div className="admin-events">Create</div>
}
