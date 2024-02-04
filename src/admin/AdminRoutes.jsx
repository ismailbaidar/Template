import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminSidebar from "./AdminSidebar";
import "../assets/styles/admin-routes.css";
import AdminEvents from "./AdminEvents";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CreateEventAdmin from "./CreateEventAdmin";
import AdminUsers from "./AdminUsers";
import CreateUsersAdmin from "./CreateUsersAdmin";
import EditUsersAdmin from "./EditUsersAdmin";

import EditEventAdmin from "./EditEventAdmin";
import AdminSessions from "./AdminSessions";
import CreateSessionPage from "./CreateSessionPage";
import AdminCategories from "./AdminCategories";
import CreateCategoryPage from "./CreateCategoryPage";
export default function AdminRoutes() {
  const paths = useSelector((state) => state.AdminNavigationReducer.paths);
  console.log(paths[0]);
  return (
    <div className="admin-section">
      <AdminSidebar />
      <div className="content">
        <div className="topbar">
          {paths.map((path, index) => {
            let allPaths = "";
            console.log(paths, path);

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
            );
          })}
        </div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="events/create" element={<CreateEventAdmin />} />
          <Route path="events" element={<AdminEvents />} />
          <Route path="events/:id" element={<EditEventAdmin />} />
          <Route path="users/create" element={<CreateUsersAdmin />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/edit/:id" element={<EditUsersAdmin />} />
          <Route path="sessions" element={<AdminSessions />} />
          <Route
            path="events/:id/sessions/create"
            element={<CreateSessionPage />}
          />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="categories/create" element={<CreateCategoryPage />} />
        </Routes>
      </div>
    </div>
  );
}
