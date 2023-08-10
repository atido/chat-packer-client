import CardGroup from '../CardGroup';
import FlightCard from './FlightCard';

export default function FlightCardGroup({ body }) {
  return <CardGroup body={body} component={FlightCard} />;
}
