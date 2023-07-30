import "../Card.css";
import "./TripCard.css";

export default function TripCard() {
  return (
    <div className="TripCard card">
      <div className="TripCard--Top" style={{ background: `url("/exampleTravel.png")` }}>
        <div className="cardGradient"></div>
        <h3 className="cardHeading--lg">
          Buenos Aires
        </h3>
      </div>
      <div className="TripCard--Bottom">
        <div className="subtitle">Argentine</div>
        <div className="TripCard--Date">
          <div>14 Dec 2023 </div>
          <span> - </span>
          <div> 30 Dec 2023</div>
        </div>
      </div>
    </div>
  );
}
