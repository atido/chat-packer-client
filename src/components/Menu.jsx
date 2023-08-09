import { Icon } from '@iconify/react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { TripsContext } from '../context/trips.context';
import './Menu.css';

export default function () {
  const { logout } = useContext(AuthContext);
  const { trips } = useContext(TripsContext);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="menu">
      <div className="menuUp">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            {trips.map(trip => (
              <li key={trip._id}>
                <Link className="hyperlink--no-decoration" to={`/trips/${trip._id}`}>
                  {trip.tripInfo.destinationCity}
                </Link>
              </li>
            ))}
            <button
              onClick={e => {
                logout();
              }}
            >
              <Icon className="btnIcon" icon={'tabler:logout-2'} />
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
