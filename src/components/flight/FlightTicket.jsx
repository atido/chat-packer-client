import "./FlightTicket.css";

export default function FlightTicket({ flightInfo, isReturn }) {
  return (
    <div className="flightTicket__container">
      <div className="flightTicket__row">
        <div className="flightTicket__info">
          <div>{flightInfo.departure.time}</div>
          <h6>{flightInfo.origin.displayCode}</h6>
        </div>
        <img src="/depart.svg" alt="go" className={isReturn ? "flipImage" : ""} />
        <div className="flightTicket__info">
          <div>{flightInfo.arrival.time}</div>
          <h6>{flightInfo.destination.displayCode}</h6>
        </div>
        <img
          className="flightTicket__carrier-logo"
          src={flightInfo.carrierLogo}
          alt="flight carrier logo"
        />
      </div>
    </div>
  );
}
