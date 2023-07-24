import "./FlightTicket.css";

export default function FlightTicket({ journey }) {
  return (
    <div className="flightTicket__container">
      <div className="flightTicket__row">
        <div className="flightTicket__info">
          <div>{journey.departure.time}</div>
          <h6>{journey.origin.displayCode}</h6>
        </div>
        <img src="/depart.svg" alt="go" />
        <div className="flightTicket__info">
          <div>{journey.arrival.time}</div>
          <h6>{journey.destination.displayCode}</h6>
        </div>
        <img
          className="flightTicket__carrier-logo"
          src={journey.carrierLogo}
          alt="flight carrier logo"
        />
      </div>
    </div>
  );
}
