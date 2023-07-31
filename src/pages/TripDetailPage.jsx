import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AccommodationDetailCard from "../components/accommodation/AccommodationDetailCard";
import FlightDetailCard from "../components/flight/FlightDetailCard";
import "./TripDetailPage.css";

export default function TripDetailPage() {
  const [errorMessage, setErrorMessage] = useState("");
  const [trip, setTrip] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getTripDetail = async () => {
      const storedToken = localStorage.getItem("authToken");

      await fetch(`${import.meta.env.VITE_BACKEND_HOST}/api/trips/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
        .then((response) => response.json())
        .then((data) => setTrip(data))
        .catch((error) => console.log(error));
    };
    getTripDetail();
  }, [id]);

  return (
    <>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {trip && (
        <div className="trip-detail container">
          <div className="trip-detail__header">
            <div className="backlink">
              <img className="backlink__img" src="/back-arrow.svg" alt="back arrow" />
              <div className="backlink__text">
                <Link to="/trips">Back to trip list</Link>
              </div>
            </div>
          </div>
          <FlightDetailCard flight={trip.flight} />
          <AccommodationDetailCard
            accommodation={trip.accommodation}
            departureDate={trip.tripInfo.departureDate}
            returnDate={trip.tripInfo.returnDate}
          />
        </div>
      )}
    </>
  );
}
