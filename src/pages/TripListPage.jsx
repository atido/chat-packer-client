import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myaxios from "../../myaxios";
import TripCard from "../../src/components/trip/TripCard.jsx";
import "./TripListPage.css";

export default function TripList() {
  const [errorMessage, setErrorMessage] = useState("");
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const getAllTrips = () => {
      myaxios
        .get(`${import.meta.env.VITE_BACKEND_HOST}/api/trips`)
        .then((response) => setTrips(response.data))
        .catch((error) => setErrorMessage(error.response.data.errorMessage));
    };
    getAllTrips();
  }, []);

  return (
    <div className="trip-list-display">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {trips.length && (
        <div className="trip-list">
          <ul>
            {trips.map((trip) => (
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
