import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myaxios from "../../myaxios";
import SearchBar from "../components/SearchBar";
import TripCard from "../../src/components/trip/TripCard.jsx";
import "./TripListPage.css";

export default function TripList() {
  const [errorMessage, setErrorMessage] = useState("");
  const [trips, setTrips] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");

  useEffect(() => {
    const getAllTrips = () => {
      myaxios
        .get(`${import.meta.env.VITE_BACKEND_HOST}/api/trips`)
        .then((response) => setTrips(response.data))
        .catch((error) => setErrorMessage(error.message));
    };
    getAllTrips();
  }, []);

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleSort(event) {
    setSortOption(event.target.value);
  }

  function sortTrips(trips) {
    if (sortOption === "date") {
      return [...trips].sort((a, b) => new Date(a.trip.tripInfo.departureDate) - new Date(b.trip.tripInfo.departureDate));
    } else if (sortOption === "destination") {
      return [...trips].sort((a, b) => a.trip.tripInfo.destinationCity.localeCompare(b.trip.tripInfo.destinationCity));
    }
    return trips;
  }

  return (
    <div className="trip-list-display">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="trip-list-heading">
        <div>
          Sort by: 
          <select value={sortOption} onChange={handleSort}>
            <option value="date">Departure Date</option>
            <option value="destination">Destination City</option>
          </select>
        </div>
        <SearchBar value={query} handleSearch={handleSearch} />
      </div>
      {trips.length>0 && (
        <div className="trip-list">
          <ul>
            {trips
            .filter((trip) => trip.tripInfo.destinationCity.toLowerCase().includes(query.toLowerCase()))
            .map((trip) => (
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
          <Icon className="addTripBtn" icon={"zondicons:add-solid"} />
          Create a new trip
        </Link>
      </div>
    </div>
  );
}
