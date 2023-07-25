import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccomodationDetailCard from "../components/accomodation/AccomodationDetailCard";
import FlightDetailCard from "../components/flight/FlightDetailCard";

export default function TripDetailPage() {
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
      {trip && (
        <div className="trip-detail">
          <FlightDetailCard flight={trip.flight} />
          <AccomodationDetailCard
            accomodation={trip.accomodation}
            departureDate={trip.tripInfo.departureDate}
            returnDate={trip.tripInfo.returnDate}
          />
        </div>
      )}
    </>
  );
}
