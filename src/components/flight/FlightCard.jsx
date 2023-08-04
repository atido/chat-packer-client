import { Icon } from "@iconify/react";
import "../Card.css";
import "./FlightCard.css";
import FlightTicket from "./FlightTicket";

export default function FlightCard({ flight }) {
  return (
    <div className="card">
      <div className="flightCard__top">
        <div className="cardHeading--lg">
          <div>{flight.type}</div>
          <div>{`${flight.price.total} ${flight.price.currency == "USD" ? "$" : "€"}`}</div>
        </div>
        <FlightTicket flightInfo={flight.go} />
        <FlightTicket flightInfo={flight.back} />
      </div>
      <div className="flightCard__bottom">
        <div className="cardHeading--Black">
          <div className="flightOriginDestination">
            {flight.go.origin.name}-{flight.go.destination.name}
          </div>
          <div className="flightPrice">{`${flight.price.total} ${
            flight.price.currency == "USD" ? "$" : "€"
          }`}</div>
        </div>
        <h6>
          <Icon icon={"formkit:arrowright"} />
          {`${flight.go.departure.date} ,${flight.go.departure.time} ${flight.go.duration}`}
        </h6>
        <h6>
          <Icon icon={"formkit:arrowleft"} />
          {`${flight.back.departure.date} ,${flight.back.departure.time} ${flight.back.duration}`}
        </h6>
      </div>
    </div>
  );
}
