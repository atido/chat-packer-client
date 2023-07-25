import "./FlightDetailCard.css";
import FlightInfo from "./FlightInfo";
import FlightTicket from "./FlightTicket";

export default function FlightDetailCard({ flight }) {
  return (
    <section className="flight-detail-card">
      <div className="flight-detail-card__container">
        <div className="flight-detail-card__content">
          <div className="flight-detail-card__journey">
            <FlightTicket flightInfo={flight.go} />
            <FlightInfo flightInfo={flight.go} />
          </div>
          <div className="flight-detail-card__journey">
            <FlightTicket flightInfo={flight.back} />
            <FlightInfo flightInfo={flight.back} />
          </div>
        </div>
      </div>
    </section>
  );
}
