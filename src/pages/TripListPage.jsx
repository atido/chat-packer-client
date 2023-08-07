import { Icon } from '@iconify/react';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import myaxios from '../../myaxios';
import TripCard from '../../src/components/trip/TripCard.jsx';
import SearchBar from '../components/SearchBar';
import { TripsContext } from '../context/trips.context';
import './TripListPage.css';

export default function TripList() {
  const { trips, errorMessage } = useContext(TripsContext);
  const [sortedTrips, setSortedTrips] = useState([]);
  const [query, setQuery] = useState('');
  const [sortOption, setSortOption] = useState('date');

  useEffect(() => {
    setSortedTrips(sortTrips(trips));
  }, [sortOption, trips]);

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleSort(event) {
    setSortOption(event.target.value);
  }

  function sortTrips(trips) {
    if (sortOption === 'date') {
      return [...trips].sort((a, b) => new Date(a.tripInfo.departureDate) - new Date(b.tripInfo.departureDate));
    } else if (sortOption === 'destination') {
      return [...trips].sort((a, b) => a.tripInfo.destinationCity.localeCompare(b.tripInfo.destinationCity));
    }
    return trips;
  }

  return (
    <>
      {errorMessage ? (
        <p className="error-message">{errorMessage}</p>
      ) : (
        <div className="trip-list-display">
          <div className="trip-list-heading">
            <div className="sort-bar">
              Sort by:
              <select value={sortOption} onChange={handleSort}>
                <option value="date">Departure Date</option>
                <option value="destination">Destination City</option>
              </select>
            </div>
            <SearchBar value={query} handleSearch={handleSearch} />
          </div>

          {sortedTrips.length > 0 && (
            <div className="trip-list">
              <ul>
                {sortedTrips
                  .filter(trip => trip.tripInfo.destinationCity.toLowerCase().startsWith(query.toLowerCase()))
                  .map(trip => (
                    <li key={trip._id}>
                      <Link className="hyperlink--no-decoration" to={`/trips/${trip._id}`}>
                        <TripCard trip={trip} />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
          <div className="addTrip">
            <Link to="/">
              <Icon className="addTripBtn" icon={'zondicons:add-solid'} />
              Create a new trip
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
