import React, { useEffect } from "react"
import "../assets/styles/aboutus.css"
import { useDispatch } from "react-redux"
import { setCurrentPage } from "../Features/NavigationSlice"

function AboutUs() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setCurrentPage("About"))
  },[])
  return (
    <section className="about-us-container">
      <div className="titel">
        <h1>About Us</h1>
      </div>
      <div className="container">
        <div className="card-cont">
          <div className="image-container">
            <img src="../Images/Blue.jpg" alt="" />
          </div>
          <div className="text-contain">
            <div className="text-header">
              <h4>Moroccan Microsoft Community</h4>
            </div>
            <div className="text-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              magni! Quis recusandae officia expedita quisquam earum? Amet
              temporibus qui vitae sequi dolores eligendi, repellendus id culpa
              inventore officiis enim! Deserunt.
            </div>
          </div>
        </div>

        <div className="card-cont">
          <div className="text-contain">
            <div className="text-header">
              <h4>Moroccan Microsoft Community</h4>
            </div>
            <div className="text-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              magni! Quis recusandae officia expedita quisquam earum? Amet
              temporibus qui vitae sequi dolores eligendi, repellendus id culpa
              inventore officiis enim! Deserunt.
            </div>
          </div>

          <div className="image-container">
            <img src="../Images/Blue.jpg" alt="" />
          </div>
        </div>
        <div className="card-cont">
          <div className="image-container">
            <img src="../Images/Blue.jpg" alt="" />
          </div>
          <div className="text-contain">
            <div className="text-header">
              <h4>Moroccan Microsoft Community</h4>
            </div>
            <div className="text-body">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt,
              magni! Quis recusandae officia expedita quisquam earum? Amet
              temporibus qui vitae sequi dolores eligendi, repellendus id culpa
              inventore officiis enim! Deserunt.
            </div>
          </div>
        </div>
      </div>
      <div className="text-miss">
        <div className="titel">
          <h1>Our Values</h1>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi a
          possimus quisquam quaerat pariatur, et, exercitationem modi facilis
          odio vero, ex Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Est odio totam in, esse unde illum rerum dolore sed? Aspernatur
        </p>
      </div>
    </section>
  )
}

export default AboutUs
