import { Routes, Route } from "react-router"
import Navbar from "./Navbar"
import HomePage from "../Pages/HomePage"
import Footer from "./Footer"
import AboutUs from "./AboutUs"
import ErrorPage from "../Pages/ErrorPage"

import Event from "./Event"
import Speakers from "./Speakers"
export default function MainRoutes({ page, setPage }) {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/Events" element={<Event />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Speakers" element={<Speakers />} />
        <Route path="/*" element={<ErrorPage code="404" />} />
      </Routes>
      <Footer />
    </>
  )
}
