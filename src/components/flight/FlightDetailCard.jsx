import "../CardDetail.css";
import "./FlightDetailCard.css";
import FlightInfo from "./FlightInfo";
import FlightTicket from "./FlightTicket";

export default function FlightDetailCard({ flight }) {
  return (
    <section className="flight-detail-card detail-card">
      <div className="detail-card__title">
        <img src="/flight.svg" alt="plane" />
        <h4>Flight</h4>
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
          Total : {flight.price.total} {flight.price.currency == "USD" ? "$" : "€"}
        </div>
      </div>
    </section>
  );
}
