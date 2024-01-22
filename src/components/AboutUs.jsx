import React from 'react';
import '../assets/styles/aboutus.css';

function AboutUs() {
  return (
    <>
      <section className='section'>
        <div className='titel'>
          <h2>About Us</h2>
        </div>
        <div className='container'>
          <div className='card-cont'>


            <div className='image-container'>

              <img src="../Images/Blue.jpg" alt="" />

            </div>
            <div className='text-contain'>
              <div className='text-header'>
                <h4>Moroccan Microsoft Community</h4>
              </div>
              <div className='text-Lorem'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, magni! Quis recusandae officia expedita quisquam earum? Amet temporibus
                qui vitae sequi dolores eligendi, repellendus id culpa inventore officiis enim! Deserunt.
              </div>
            </div>
          </div>


          <div className='card-cont'>
            <div className='text-contain'>
              <div className='text-header'>
                <h4>Moroccan Microsoft Community</h4>
              </div>
              <div className='text-Lorem'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, magni! Quis recusandae officia expedita quisquam earum? Amet temporibus
                qui vitae sequi dolores eligendi, repellendus id culpa inventore officiis enim! Deserunt.
              </div>
            </div>

            <div className='image-container'>

              <img src="../Images/Blue.jpg" alt="" />

            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default AboutUs;
