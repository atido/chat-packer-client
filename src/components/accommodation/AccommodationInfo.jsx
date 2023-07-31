import { formatDate } from "../../utils/date";
import "./AccommodationInfo.css";

export default function AccommodationInfo({ accommodationInfo, departureDate, returnDate }) {
  return (
    <div className="accommodation-info">
      <h5 className="accommodation-info__title">{accommodationInfo.name}</h5>
      <div className="accommodation-info__content">
        <p>City : {accommodationInfo.city}</p>
        <p>
          Rating : {accommodationInfo.rating} <span>★</span>
        </p>
        <p>Check in : {formatDate(departureDate)}</p>
        <p>Check out : {formatDate(returnDate)}</p>
      </div>
    </div>
  );
}
