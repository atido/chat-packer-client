import { Icon } from "@iconify/react";
import "../CardDetail.css";
import "./FlightDetailCard.css";
import FlightInfo from "./FlightInfo";
import FlightTicket from "./FlightTicket";

export default function FlightDetailCard({ flight }) {
  return (
    <section className="flight-detail-card detail-card">
      <div className="detail-card__title">
        <Icon className="trip-detail__icon" icon="fluent-mdl2:airplane" />
        <h2>Flight</h2>
      </div>
      <div className="detail-card__container">
        <div className="flight-detail-card__content">
          <div className="flight-detail-card__journey">
            <div className="flight-detail-card__ticket">
              <FlightTicket flightInfo={flight.go} />
            </div>
            <FlightInfo flightInfo={flight.go} />
          </div>
          <div className="flight-detail-card__journey">
            <div className="flight-detail-card__ticket">
              <FlightTicket flightInfo={flight.back} />
            </div>
            <FlightInfo flightInfo={flight.back} />
          </div>
          <div className="total">Total : {flight.price.total} {flight.price.currency == "USD" ? "$" : "€"}</div>
        </div>
      </div>
    </section>
  );
}
