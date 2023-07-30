import { Icon } from "@iconify/react";
import axios from "axios";
import "./TripListPage.css";
import TripCard from "../../src/components/trip/TripCard.jsx"

export default function TripList() {
  const getAllTrips = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .get(`${import.meta.env.VITE_BACKEND_HOST}/api/trips`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="trip-list-display">
      <div className="trip-list">
        <ul>
          <li><TripCard/></li>
          <li><TripCard/></li>
          <li><TripCard/></li>
          <li><TripCard/></li>
        </ul>
      </div>
      <div className="addTrip"><Icon className="addTripBtn" icon={"zondicons:add-solid"}/>Create a new trip</div>
    </div>
  );
}
