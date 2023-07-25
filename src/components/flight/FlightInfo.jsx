import "./FlightInfo.css";

export default function FlightInfo({ flightInfo }) {
  return (
    <div className="flight-info">
      <h4 className="flight-info__title">
        {flightInfo.origin.name}-{flightInfo.destination.name}
      </h4>
      <h5 className="flight-info__direction-title">Departure</h5>
      <p>
        {flightInfo.departure.date} {flightInfo.departure.time}
      </p>
      <p>{flightInfo.origin.name}</p>

      <h5 className="flight-info__direction-title">Arrival</h5>
      <p>
        {flightInfo.destination.date} {flightInfo.destination.time}
      </p>
      <p>{flightInfo.destination.name}</p>
    </div>
  );
}
