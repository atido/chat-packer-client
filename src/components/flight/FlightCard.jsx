import { Icon } from "@iconify/react";
import "../Card.css";
import "./FlightCard.css";

export default function FlightCard({ flight }) {
  return (
    <div className="card">
      <div className="flightCard--Top">
        <div className="cardHeading--White">
          <div>{flight.type}</div>
          <div>{`${flight.price.total} ${flight.price.currency == "USD" ? "$" : "€"}`}</div>
        </div>
        <div className="flightTicket--container">
          <div className="flightTicket--row">
            <div className="flightTicket--Info">
              <div>{flight.go.departure.time}</div>
              <h6>{flight.go.origin.displayCode}</h6>
            </div>
            <img src="/depart.svg" alt="" />
            <div className="flightTicket--Info">
              <div>{flight.go.arrival.time}</div>
              <h6>{flight.go.destination.displayCode}</h6>
            </div>
            <img src="" alt="" />
          </div>
          <div className="flightTicket--row">
            <div className="flightTicket--Info">
              <div>{flight.back.departure.time}</div>
              <h6>{flight.back.origin.displayCode}</h6>
            </div>
            <img src="/return.svg" alt="" />
            <div className="flightTicket--Info">
              <div>{flight.back.arrival.time}</div>
              <h6>{flight.back.destination.displayCode}</h6>
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
      <div className="flightCard--Bottom">
        <div className="cardHeading--Black">
          <div>
            {flight.go.origin.name}-{flight.go.destination.name}
          </div>
          <div>{`${flight.price.total} ${flight.price.currency == "USD" ? "$" : "€"}`}</div>
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
