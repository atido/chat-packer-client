import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AccommodationDetailCard from "../components/accommodation/AccommodationDetailCard";
import FlightDetailCard from "../components/flight/FlightDetailCard";
import "../globals.css";
import { formatDate } from "../utils/date";
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
        <div className="trip-detail__container">
          <div
            className="trip-detail__headerImg"
            style={{ backgroundImage: `url(${trip.destinationPhoto})` }}
          ></div>
          <div className="trip-detail__header">
            <div className="trip-detail__baseInfo">
              <div className="trip-detail__cities">
                <Icon
                  className="trip-detail__icon"
                  icon="streamline:travel-map-flag-navigation-map-maps-flag-gps-location-destination-goal"
                />
                <h2>{trip.tripInfo.destinationCity}</h2>
              </div>
              <div className="trip-detail__cities">
                from <h3>{trip.tripInfo.departureCity}</h3>
              </div>
              <div className="trip-detail__dates">
                {formatDate(trip.tripInfo.departureDate)} - {formatDate(trip.tripInfo.returnDate)}
              </div>
              <div className="trip-detail__traveler">
                {trip.tripInfo.adultsNb} travaller{!trip.tripInfo.adultsNb<=1 && <span>s</span>}
                
              </div>
            </div>
            <div className="backlink">
              <img className="backlink__img" src="/back-arrow.svg" alt="back arrow" />
              <div className="backlink__text">
                <Link to="/trips">Back to trip list</Link>
              </div>
            </div>
          </div>
          <section className="tripDetail__section">
            {trip.flight && <FlightDetailCard flight={trip.flight} />}
          </section>

          <section className="tripDetail__section">
            {trip.accommodation && (
              <AccommodationDetailCard
                accommodation={trip.accommodation}
                departureDate={trip.tripInfo.departureDate}
                returnDate={trip.tripInfo.returnDate}
              />
            )}
          </section>
        </div>
      )}
    </>
  );
}
