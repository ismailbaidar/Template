import { useState, useEffect, useMemo, useRef } from "react"
import CountUp from "react-countup"
import "../assets/styles/stats.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faCalendarCheck,
  faCity,
  faHandshake,
  faUsers,
} from "@fortawesome/free-solid-svg-icons"

export default function Stats() {
  //mock data
  const data = {
    eventCountData: 3000000,
    attendanceCountData: 1200000,
    sponsorsCountData: 10000,
    visitedCitiesCountData: 111113,
  }

  //   const stats = useRef()

  //   const [isVisible, setIsVisible] = useState(false)

  //   const handleScroll = () => {
  //     if (stats.current) {
  //       console.log(
  //         "hello",
  //         stats.current.getBoundingClientRect().top,
  //         window.innerHeight
  //       )
  //       const rect = stats.current.getBoundingClientRect()
  //       const isVisible = rect.top > window.innerHeight
  //       setIsVisible(isVisible)
  //       console.log(isVisible)
  //     }
  //   }

  return (
    <div className="stats">
      <div className="background"></div>
      {true && (
        <div className="stats-container">
          <div className="stat">
            <FontAwesomeIcon icon={faHandshake} />
            <CountUp
              start={0}
              duration={5}
              delay={2}
              end={data.eventCountData}
            />
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faUsers} />

            <CountUp
              start={0}
              duration={5}
              delay={2}
              end={data.attendanceCountData}
            />
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faCity} />
            <CountUp
              start={0}
              duration={5}
              delay={2}
              end={data.sponsorsCountData}
            />
          </div>
          <div className="stat">
            <FontAwesomeIcon icon={faCalendarCheck} />
            <CountUp
              start={0}
              duration={5}
              delay={2}
              end={data.visitedCitiesCountData}
            />
          </div>
        </div>
      )}
    </div>
  )
}
