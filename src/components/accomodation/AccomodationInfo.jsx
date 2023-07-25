import { formatDate } from "../../utils/date";
import "./AccomodationInfo.css";

export default function AccomodationInfo({ accomodationInfo, departureDate, returnDate }) {
  return (
    <div className="accomodation-info">
      <h5 className="accomodation-info__title">{accomodationInfo.name}</h5>
      <div className="accomodation-info__content">
        <p>City : {accomodationInfo.city}</p>
        <p>
          Rating : {accomodationInfo.rating} <span>★</span>
        </p>
        <p>Check in : {formatDate(departureDate)}</p>
        <p>Check out : {formatDate(returnDate)}</p>
      </div>
    </div>
  );
}
