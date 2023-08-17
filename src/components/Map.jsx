import { Icon } from '@iconify/react';
import { Autocomplete, DirectionsRenderer, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import myaxios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './Map.css';

function Map({ address }) {
  const [coordinates, setCoordinates] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  useEffect(() => {
    const geocodingAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${
      import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
    }`;
    myaxios
      .get(geocodingAPI)
      .then(response => {
        if (response.data.status === 'OK') {
          setCoordinates({ lat: response.data.results[0].geometry.location.lat, lng: response.data.results[0].geometry.location.lng });
        } else {
          console.error('Geocoding error', response);
        }
      })
      .catch(error => console.error('Geocoding API error', error));
  }, []);

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <div className="skeleton-loader"></div>;
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return;
    }

    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,

      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destiantionRef.current.value = '';
  }

  return (
    <>
      <div className="mapBar">
        <div className="mapSearchBar">
          <div>
            <Autocomplete>
              <input className="mapInput" type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>
          </div>
          <div>
            <Autocomplete>
              <input className="mapInput" type="text" placeholder="Destination" ref={destiantionRef} />
            </Autocomplete>
          </div>

          <div className="mapBtnGp">
            <button className="btn btn--primary" type="submit" onClick={calculateRoute}>
              Calculate Route
            </button>
            <button onClick={clearRoute}>
              <Icon className="clearRouteBtn" icon={'ic:baseline-close'} />
            </button>
          </div>
        </div>
        <div className="mapInfoBar">
          <div>Distance: {distance} </div>
          <div>Duration: {duration} </div>
          <button
            onClick={() => {
              console.log('> center <', coordinates);
              map.panTo(coordinates);
              map.setZoom(15);
            }}
          >
            <Icon className="recenterBtn" icon={'iconoir:maps-arrow'} />
          </button>
        </div>
      </div>
      <div className="mapContainer">
        <div className="map">
          <GoogleMap
            center={coordinates}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: true,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={coordinates} />
            {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
          </GoogleMap>
        </div>
      </div>
    </>
  );
}

export default Map;
