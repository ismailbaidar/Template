import Card from "./Card"
import "../assets/styles/cards.css"
export default function Cards() {
  const data = [1, 2, 3]
  return (
    <div className="cards">
      <div className="section-name">
        <h1>Events</h1>
      </div>
      <div className="cards-wrapper">
        {data.map((data) => {
          return <Card />
        })}
      </div>
      <button className="show-more-button">Show more</button>
    </div>
  )
}
