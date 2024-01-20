// import ensaAgadir from "../assets/Images/ensaAgadir.jpg"
// import ecoleOuarzazat from "../assets/Images/Blue.jpg"
// import EnsaBeni from "../assets/Images/EnsaBeni.jpg"
// import estMeknas from "../assets/Images/estMeknas.jpg"
// import EnsaKheribga from "../assets/Images/EnsaKheribga.jpg"
// import said from "../assets/Images/said_wahid.jpg"
// import youssef from "../assets/Images/youssef_chigane.jpg.jpg"
// import outman from "../assets/Images/outman_bazzaz.jpg"
// import mohssine from "../assets/Images/mohssine_masaaf.jpg.jpg"
// import hassan from "../assets/Images/hassan_fadili.jpg"
// import anas from "../assets/Images/anas_belabbes.jpg"
import { Link } from "react-router-dom"

import "../assets/styles/cards.css"
export default function Cards() {
  const handleClick = () => {
    window.location.href = "/Event"
  }
  return (
    <>
      <section className="section flex flex-col gap-5 p-5 m-auto">
        <div className="section-title">Events</div>
        <div className="grid gap-5">
          <div className="max-content  gap-6 cards-container ">
            <figure className="grid event-card shadow-xl">
              <div className="w-max  rounded-lg">
                <img className="h-40 w-96" src="" alt="" />
              </div>
              <div className="date-contain flex  ">
                <div className="aaa bg-red-500 rounded date-preview">
                  <h5 className="text-slate-100 font-bold ">17 Feb</h5>
                </div>
              </div>
              <div className="p-4 grid gap-3">
                <div className="inline-block text-justify">
                  <h4 className="font-bold text-sm">Microsoft Tech Day</h4>
                  <p className="text-xs text-gray-500">Microsoft Tech Day</p>
                </div>

                <div>
                  <div>
                    <p className="font-mono text-ms font-bold ">Speakers</p>
                  </div>

                  <div className="imgSpeaker  flex align-center">
                    <div className="spk1 ">
                      <img
                        className="img"
                        src="./public/images/said_wahid.jpg"
                        alt=""
                      />
                    </div>
                    <div className="spk1">
                      <img
                        className="img"
                        src="./public/images/youssef_chigane.jpg"
                        alt=""
                      />
                    </div>
                    <div className="spk1">
                      <img
                        className="img"
                        src="./public/images/mohssine_masaaf.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </figure>
            <figure className="grid event-card shadow-xl">
              <div className="w-max  rounded-lg">
                <img className="h-40 w-96" src="" alt="" />
              </div>
              <div className="date-contain flex  ">
                <div className="aaa bg-red-500 rounded date-preview">
                  <h5 className="text-slate-100 font-bold ">17 Feb</h5>
                </div>
              </div>
              <div className="p-4 grid gap-3">
                <div className="inline-block text-justify">
                  <h4 className="font-bold text-sm">Microsoft Tech Day</h4>
                  <p className="text-xs text-gray-500">Microsoft Tech Day</p>
                </div>

                <div>
                  <div>
                    <p className="font-mono text-ms font-bold ">Speakers</p>
                  </div>

                  <div className="imgSpeaker  flex align-center">
                    <div className="spk1 ">
                      <img
                        className="img"
                        src="./public/images/said_wahid.jpg"
                        alt=""
                      />
                    </div>
                    <div className="spk1">
                      <img
                        className="img"
                        src="./public/images/youssef_chigane.jpg"
                        alt=""
                      />
                    </div>
                    <div className="spk1">
                      <img
                        className="img"
                        src="./public/images/mohssine_masaaf.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </figure>
            <figure className="grid event-card shadow-xl">
              <div className="w-max  rounded-lg">
                <img className="h-40 w-96" src="" alt="" />
              </div>
              <div className="date-contain flex  ">
                <div className="aaa bg-red-500 rounded date-preview">
                  <h5 className="text-slate-100 font-bold ">17 Feb</h5>
                </div>
              </div>
              <div className="p-4 grid gap-3">
                <div className="inline-block text-justify">
                  <h4 className="font-bold text-sm">Microsoft Tech Day</h4>
                  <p className="text-xs text-gray-500">Microsoft Tech Day</p>
                </div>

                <div>
                  <div>
                    <p className="font-mono text-ms font-bold ">Speakers</p>
                  </div>

                  <div className="imgSpeaker  flex align-center">
                    <div className="spk1 ">
                      <img
                        className="img"
                        src="./public/images/said_wahid.jpg"
                        alt=""
                      />
                    </div>
                    <div className="spk1">
                      <img
                        className="img"
                        src="./public/images/youssef_chigane.jpg"
                        alt=""
                      />
                    </div>
                    <div className="spk1">
                      <img
                        className="img"
                        src="./public/images/mohssine_masaaf.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div className=" button-container">
          <Link
            to="/Event"
            className="font-bold py-3 px-8  bg-red-500 text-white hover:bg-red-800"
          >
            Show more
          </Link>
        </div>
      </section>
    </>
  )
}
