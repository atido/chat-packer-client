import CardGroup from '../CardGroup';
import AccommodationCard from './AccommodationCard';

export default function AccommodationCardGroup({ body }) {
  return <CardGroup body={body} component={AccommodationCard} />;
}
