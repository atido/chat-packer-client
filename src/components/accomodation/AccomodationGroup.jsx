import "../CardGroup.css";
import AccomodationCard from "./AccomodationCard";

export default function AccomodationCardGroup({ body }) {
  return (
    <div className="card-group">
      {body.map((accomodation) => (
        <AccomodationCard key={accomodation._id} accomodation={accomodation} />
      ))}
    </div>
  );
}
