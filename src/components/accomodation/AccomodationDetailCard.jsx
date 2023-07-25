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
            <div className="tag">Amenities 1</div>
            <div className="tag">Amenities 2</div>
            <div className="tag">Amenities 3</div>
            <div className="tag">Amenities 4</div>
            <div className="tag">Amenities 5</div>
          </div>
          <div className="accomodation-detail-card_price">
            Total : {accomodation.price.total} {accomodation.price.currency == "USD" ? "$" : "€"}
          </div>
        </div>
      </div>
    </section>
  );
}
