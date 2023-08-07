import React, { useState, useEffect } from 'react';
import myaxios from '../../myaxios';

const TripsContext = React.createContext();

function TripsProviderWrapper(props) {
  const [trips, setTrips] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  function refreshTrips() {
    myaxios
      .get('/api/trips')
      .then(response => setTrips(response.data))
      .catch(error => setErrorMessage(error.message));
  }

  useEffect(() => {
    refreshTrips();
  }, []);

  return <TripsContext.Provider value={{ trips, errorMessage, refreshTrips }}>{props.children}</TripsContext.Provider>;
}

export { TripsContext, TripsProviderWrapper };
