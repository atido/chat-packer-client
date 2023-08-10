import { Icon } from '@iconify/react';
import '../Card.css';
import './FlightCard.css';
import FlightTicket from './FlightTicket';

export default function FlightCard({ body }) {
  return (
    <div className="card">
      <div className="flightCard__top">
        <div className="cardHeading--lg">
          <div>{body.type}</div>
          <div>{`${body.price.total} ${body.price.currency == 'USD' ? '$' : '€'}`}</div>
        </div>
        <FlightTicket flightInfo={body.go} />
        <FlightTicket flightInfo={body.back} />
      </div>
      <div className="flightCard__bottom">
        <div className="cardHeading--Black">
          <div className="flightOriginDestination">
            {body.go.origin.name}-{body.go.destination.name}
          </div>
          <div className="flightPrice">{`${body.price.total} ${body.price.currency == 'USD' ? '$' : '€'}`}</div>
        </div>
        <h6>
          <Icon icon={'formkit:arrowright'} />
          {`${body.go.departure.date} ,${body.go.departure.time} ${body.go.duration}`}
        </h6>
        <h6>
          <Icon icon={'formkit:arrowleft'} />
          {`${body.back.departure.date} ,${body.back.departure.time} ${body.back.duration}`}
        </h6>
      </div>
    </div>
  );
}
