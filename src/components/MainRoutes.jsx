import { Routes, Route } from "react-router"
import Navbar from "./Navbar"
import HomePage from "../Pages/HomePage"
import Footer from "./Footer"
export default function MainRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<h1>This is the events page</h1>} />
        <Route path="/About" element={<h1>About Page</h1>} />
      </Routes>
      <Footer />
    </>
  )
}