import { formatDate } from "../../utils/date";
import "../Card.css";
import "./TripCard.css";

export default function TripCard({ trip }) {
  return (
    <div className="TripCard card">
      <div className="TripCard--Top" style={{ background: `url(${trip.destinationPhoto})` }}>
        <div className="cardGradient"></div>
        <h3 className="cardHeading--lg">{trip.tripInfo.destinationCity}</h3>
      </div>
      <div className="TripCard--Bottom">
        <div className="subtitle">---</div>
        <div className="TripCard--Date">
          <div>{formatDate(trip.tripInfo.departureDate)}</div>
          <span> - </span>
          <div> {formatDate(trip.tripInfo.returnDate)}</div>
        </div>
      </div>
    </div>
  );
}
