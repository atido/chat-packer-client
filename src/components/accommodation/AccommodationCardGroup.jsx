import "../CardGroup.css";
import AccommodationCard from "./AccommodationCard";

export default function AccommodationCardGroup({ body }) {
  return (
    <div className="card-group acccomodation">
      {body.map((accommodation) => (
        <AccommodationCard key={accommodation._id} accommodation={accommodation} />
      ))}
    </div>
  );
}
