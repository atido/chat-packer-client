import { Icon } from '@iconify/react';

import '../Card.css';
import './AccommodationCard.css';

export default function AccommodationCard({ body }) {
  return (
    <div className="card">
      <div className="AccomCard--Top " style={{ backgroundImage: `url(${body.images[0]})` }}>
        <div className="AccomCard--Location">
          <Icon icon={'carbon:location-filled'} />
          {body.city}
        </div>
        <div className="AccomCard--Price">
          <div>{`${body.price.total} ${body.price.currency == 'USD' ? '$' : '€'}`}</div>
        </div>
      </div>
      <div className="AccomCard--Bottom">
        <div className="AccomCard--HostInfo">
          <span className="cardHeading--Black AccomCard--Name">{body.name}</span>
          <span className="AccomCard--Star">★</span>
          <span className="AccomCard--Rating">
            <h4>{body.rating}</h4>
          </span>
        </div>
        {body.amenities && (
          <div className="tag-group">
            {body.amenities.slice(0, 3).map(amenity => (
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
