import "../CardDetail.css";
import "./AccomodationDetailCard.css";
import AccomodationInfo from "./AccomodationInfo";

export default function AccomodationDetailCard({ accomodation, departureDate, returnDate }) {
  return (
    <section className="accomodation-detail-card detail-card">
      <div className="detail-card__title">
        <img src="/accomodation.svg" alt="plane" />
        <h4>Accomodation</h4>
      </div>
      <div className="detail-card__container">
        <div className="accomodation-detail-card__content">
          <div className="accomodation-detail-card__subcontent">
            <img
              className="accomodation-detail-card__image"
              src={accomodation.images[0]}
              alt="accomodation"
            />
            <AccomodationInfo
              accomodationInfo={accomodation}
              departureDate={departureDate}
              returnDate={returnDate}
            />
            <div className="tag-group accomodation-detail-card__amenities">
              {accomodation.amenities.map((amenity) => (
                <div key={amenity} className="tag">
                  {amenity}
                </div>
              ))}
            </div>
          </div>
          <div className="accomodation-detail-card__price">
            Total : {accomodation.price.total} {accomodation.price.currency == "USD" ? "$" : "€"}
          </div>
        </div>
      </div>
    </section>
  );
}
