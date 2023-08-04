import { Icon } from "@iconify/react";

import "../Card.css";
import "./AccommodationCard.css";

export default function AccommodationCard({ accommodation }) {
  return (
    <div className="card">
      <div
        className="AccomCard--Top "
        style={{ backgroundImage: `url(${accommodation.images[0]})` }}
      >
        <div className="AccomCard--Location">
          <Icon icon={"carbon:location-filled"} />
          {accommodation.city}
        </div>
        <div className="AccomCard--Price">
          <div>{`${accommodation.price.total} ${
            accommodation.price.currency == "USD" ? "$" : "€"
          }`}</div>
        </div>
      </div>
      <div className="AccomCard--Bottom">
        <div className="AccomCard--HostInfo">
          <span className="cardHeading--Black AccomCard--Name">{accommodation.name}</span>
          <span className="AccomCard--Star">★</span>
          <span className="AccomCard--Rating">
            <h4>{accommodation.rating}</h4>
          </span>
        </div>
        {accommodation.amenities && (
          <div className="tag-group">
            {accommodation.amenities.slice(0, 3).map((amenity) => (
              <div key={amenity} className="tag">
                {amenity}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
