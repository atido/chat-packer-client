import { Icon } from "@iconify/react";

import "../Card.css";
import "./AccomodationCard.css";

export default function AccomCard({ accomodation }) {
  return (
    <div className="card">
      <div
        className="AccomCard--Top "
        style={{ backgroundImage: `url(${accomodation.images[0]})` }}
      >
        <div className="AccomCard--Location">
          <Icon icon={"carbon:location-filled"} />
          {accomodation.city}
        </div>
        <div className="AccomCard--Price">
          <div>{`${accomodation.price.total} ${
            accomodation.price.currency == "USD" ? "$" : "€"
          }`}</div>
          <h6>/night</h6>
        </div>
      </div>
      <div className="AccomCard--Bottom">
        <div className="AccomCard--HostInfo">
          <span className="cardHeading--Black AccomCard--Name">{accomodation.name}</span>
          <span className="AccomCard--Star">★</span>
          <span className="AccomCard--Rating">
            <h4>{accomodation.rating}</h4>
          </span>
        </div>
        <div className="AccomCard--Amenities">
          <span className="AccomCard--Amenity">1 bed</span>
          <span className="AccomCard--Amenity">1 private bathroom</span>
        </div>
      </div>
    </div>
  );
}
