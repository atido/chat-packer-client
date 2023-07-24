import FlightCard from "./FlightCard";
import "../CardGroup.css"

export default function FlightCardGroup({ body }) {
  return (
    <div className="card-group">
      {body.map((flight) => (
        <FlightCard key={flight._id} flight={flight} />
      ))}
    </div>
  );
}
