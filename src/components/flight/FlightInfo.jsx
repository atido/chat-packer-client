import { formatDate } from "../../utils/date";
import "./FlightInfo.css";

export default function FlightInfo({ flightInfo }) {
  return (
    <div className="flight-info">
      <h5 className="flight-info__title">
        {flightInfo.origin.name} - {flightInfo.destination.name}
      </h5>
      <div className="flight-info__direction">
        <p className="flight-info__direction-title">Departure</p>
        <p>
          {formatDate(flightInfo.departure.date)} {flightInfo.departure.time}
        </p>
        <p>{flightInfo.origin.name}</p>
      </div>
      <div className="flight-info__direction">
        <p className="flight-info__direction-title">Arrival</p>
        <p>
          {formatDate(flightInfo.arrival.date)} {flightInfo.arrival.time}
        </p>
        <p>{flightInfo.destination.name}</p>
      </div>
    </div>
  );
}
