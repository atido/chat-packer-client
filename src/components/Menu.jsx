import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Icon } from "@iconify/react";
import myaxios from "../../myaxios";
import "./Menu.css";

export default function () {
  //revoir note
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("");
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const getAllTrips = () => {
      myaxios
        .get(`${import.meta.env.VITE_BACKEND_HOST}/api/trips`)
        .then((response) => setTrips(response.data))
        .catch((error) => setErrorMessage(error.message));
    };
    getAllTrips();
  }, []);

  return (
    <div className="menu">
      <div className="menuUp">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            {trips.map((trip) => (
                <li key={trip._id}>
                  <Link className="hyperlink--no-decoration" to={`/trips/${trip._id}`}>
                    {trip.tripInfo.destinationCity}
                  </Link>
                </li>
              ))}
            <button onClick={e => {logout()}}><Icon className="btnIcon" icon={"tabler:logout-2"}/>Logout</button>
            {/* <span>{user && user.username}</span> */}
            
          </ul>
        </div>
      </div>
    </div>
  );
}
