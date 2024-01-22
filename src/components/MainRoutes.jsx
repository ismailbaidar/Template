import { Routes, Route } from "react-router"
import Navbar from "./Navbar"
import HomePage from "../Pages/HomePage"
import Footer from "./Footer"
import AboutUs from "./AboutUs"

export default function MainRoutes({ page, setPage }) {
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<h1>This is the events page</h1>} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}
