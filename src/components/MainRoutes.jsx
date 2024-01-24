import { Routes, Route } from "react-router"
import Navbar from "./Navbar"
import HomePage from "../Pages/HomePage"
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import ErrorPage from "../Pages/ErrorPage"

export default function MainRoutes({ page, setPage }) {
  return (
    <>
      <Routes>
        <Route path="/*" element={<ErrorPage code="404" />} />
      </Routes>
      <Navbar />

      <Routes>
        <Route path="/events" element={<h1>This is the events page</h1>} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}
