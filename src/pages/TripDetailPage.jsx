import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
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
        <div className="trip-detail__container">
          <div className="trip-detail__headerImg" style={{ backgroundImage: `url(${trip.destinationPhoto})` }}></div>
          <div className="trip-detail__header">
            <div className="trip-detail__baseInfo">
              <div className="trip-detail__cities">
              <Icon className="trip-detail__icon" icon={"streamline:travel-map-flag-navigation-map-maps-flag-gps-location-destination-goal"}/>
              <h2>{trip.destinationCity}</h2>
              </div>
              <div className="trip-detail__cities">
              from <h3>{trip.departureCity}</h3>
              </div>
              <div className="trip-detail__dates">
              {trip.departureDate} - {trip.returnDate}
              </div>
              <div className="trip-detail__traveler">
              {trip.adultsNb} x <Icon className="trip-detail__icon"icon={"radix-icons:person"} />
              </div>

            </div>
            <div className="backlink">
              <img className="backlink__img" src="/back-arrow.svg" alt="back arrow" />
              <div className="backlink__text">
                <Link to="/trips">Back to trip list</Link>
              </div>
            </div>
          </div>
          <section>
            <div className="sectionTitle"><Icon className="trip-detail__icon" icon={"ion:airplane-outline"}/>Flight</div>
            {trip.flight && <FlightDetailCard flight={trip.flight} />}
          </section>

          <section>
            <div className="sectionTitle"><Icon className="trip-detail__icon" icon={"material-symbols:hotel-outline"}/>Accomodation</div>
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
