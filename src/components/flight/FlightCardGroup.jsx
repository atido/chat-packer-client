import "../CardGroup.css";
import FlightCard from "./FlightCard";

export default function FlightCardGroup({ body }) {
  return (
    <div className="card-group flight">
      {body.map((flight) => (
        <FlightCard key={flight._id} flight={flight} />
      ))}
    </div>
  );
}
