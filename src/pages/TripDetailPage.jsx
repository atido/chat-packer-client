import { Icon } from '@iconify/react';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackLink from '../components/BackLink';
import AccommodationDetailCard from '../components/accommodation/AccommodationDetailCard';
import FlightDetailCard from '../components/flight/FlightDetailCard';
import { TripsContext } from '../context/trips.context';
import { formatDate } from '../utils/date';
import myaxios from '../utils/myaxios';
import './TripDetailPage.css';
import Map from '../components/Map';

export default function TripDetailPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const { refreshTrips } = useContext(TripsContext);
  const [trip, setTrip] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    myaxios
      .get(`/api/trips/${id}`)
      .then(response => setTrip(response.data))
      .catch(err => setErrorMessage(err.message));
  }, []);

  function deleteTrip() {
    myaxios
      .delete(`/api/trips/${id}`)
      .then(() => {
        refreshTrips();
        navigate('/trips');
      })
      .catch(err => setErrorMessage(err.message));
  }

  return (
    <>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {trip && (
        <div className="trip-detail__container">
          <div className="trip-detail__headerImg" style={{ backgroundImage: `url(${trip.destinationPhoto})` }}></div>
          <div className="trip-detail__header">
            <div className="trip-detail__baseInfo">
              <div className="trip-detail__cities">
                <Icon className="trip-detail__icon" icon="streamline:travel-map-flag-navigation-map-maps-flag-gps-location-destination-goal" />
                <h2>{trip.tripInfo.destinationCity}</h2>
              </div>
              <div className="trip-detail__cities">
                from <h3>{trip.tripInfo.departureCity}</h3>
              </div>
              <div className="trip-detail__dates">
                {formatDate(trip.tripInfo.departureDate)} - {formatDate(trip.tripInfo.returnDate)}
              </div>
              <div className="trip-detail__traveler">
                {trip.tripInfo.adultsNb} traveller{!trip.tripInfo.adultsNb <= 1 && <span>s</span>}
              </div>
            </div>
            <div className="tripDetail__headingLinks">
              <BackLink />
              <button className="btn--delete" onClick={deleteTrip}>
                <Icon className="btn--delete__icon" icon={'material-symbols:delete-outline'} />
                Delete Trip
              </button>
            </div>
          </div>
          {trip.flight && (
            <section className="tripDetail__section">
              <FlightDetailCard flight={trip.flight} />
            </section>
          )}
          {trip.accommodation && (
            <section className="tripDetail__section">
              <AccommodationDetailCard accommodation={trip.accommodation} departureDate={trip.tripInfo.departureDate} returnDate={trip.tripInfo.returnDate} />
            </section>
          )}
          <Map address={trip.tripInfo.destinationCity}/>
        </div>
      )}
    </>
  );
}
