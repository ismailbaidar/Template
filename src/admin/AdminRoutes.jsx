import { Routes, Route, Link } from "react-router-dom"
import Dashboard from "./Dashboard"
import AdminSidebar from "./AdminSidebar"
import "../assets/styles/admin-routes.css"
import AdminEvents from "./AdminEvents"
import { useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import CreateEventAdmin from "./CreateEventAdmin"
import AdminUsers from "./AdminUsers"
import CreateSpeakersAdmin from "./CreateSpeakersAdmin"
import CreateUsersAdmin from "./CreateUsersAdmin"
import EditUsersAdmin from "./EditUsersAdmin"
import EditSpeakersAdmin from "./EditSpeakersAdmin"
import EditEventAdmin from "./EditEventAdmin"
import AdminSpeakers from "./AdminSpeaker"
export default function AdminRoutes() {
  const paths = useSelector((state) => state.AdminNavigationReducer.paths)
  console.log(paths[0])
  return (
    <div className="admin-section">
      <AdminSidebar />
      <div className="content">
        <div className="topbar">
          {paths.map((path, index) => {
            let allPaths = ""
            console.log(paths, path)

            return (
              <>
                <Link to={path == "Dashboard" ? "" : path}>{path}</Link>{" "}
                {index == paths.length - 1 ? (
                  ""
                ) : (
                  <FontAwesomeIcon
                    className="separator"
                    icon={faChevronRight}
                  />
                )}
              </>
            )
          })}
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="events/create" element={<CreateEventAdmin />} />

          <Route path="events" element={<AdminEvents />} />
          <Route path="events/:id" element={<EditEventAdmin />} />
        </Routes>
        <Routes>
          <Route path="users/create" element={<CreateUsersAdmin />} />
        </Routes>
        <Routes>
          <Route path="users" element={<AdminUsers />} />
        </Routes>
        <Routes>
          <Route path="speakers/create" element={<CreateSpeakersAdmin />} />
        </Routes>
        <Routes>
          <Route path="speakers" element={<AdminSpeakers />} />
        </Routes>
        <Routes>
          <Route path="speakers/edit/:id" element={<EditSpeakersAdmin />} />

        </Routes>
        <Routes>
          <Route path="users/edit/:id" element={<EditUsersAdmin />} />
        </Routes>

      </div>
    </div>
  )
}
