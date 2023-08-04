import { Icon } from "@iconify/react";
import "../CardDetail.css";
import "./AccommodationDetailCard.css";
import AccommodationInfo from "./AccommodationInfo";

export default function AccommodationDetailCard({ accommodation, departureDate, returnDate }) {
  return (
    <section className="accommodation-detail-card detail-card">
      <div className="detail-card__title">
        <Icon className="trip-detail__icon" icon="mdi:bed-outline" />
        <h2>Accommodation</h2>
      </div>
      <div className="detail-card__container">
        <div className="accommodation-detail-card__content">
          <div className="accommodation-detail-card__subcontent">
            <img
              className="accommodation-detail-card__image"
              src={accommodation.images[0]}
              alt="accommodation"
            />
            <AccommodationInfo
              accommodationInfo={accommodation}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            {accommodation.amenities && (
              <div className="tag-group accommodation-detail-card__amenities">
                {accommodation.amenities.map((amenity) => (
                  <div key={amenity} className="tag">
                    {amenity}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="accommodation-detail-card__price">
            Total : {accommodation.price.total} {accommodation.price.currency == "USD" ? "$" : "€"}
          </div>
        </div>
      </div>
    </section>
  );
}
