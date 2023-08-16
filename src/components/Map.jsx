import "./Map.css"

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'

import { useEffect, useRef, useState } from 'react'

import { Icon } from '@iconify/react'

import axios from "axios"

function Map({address}) {
  const [coordinates, setCoordinates] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })
  
  useEffect(() => {
    const geocodingAPI = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    axios(geocodingAPI)
    .then(data => {
      if (data.status === 'OK') {
        setCoordinates(data.results[0].geometry.location);
      } else {
        console.error("Geocoding error", data);
      }
    })
    .catch(error => console.error("Geocoding API error", error));
  }, [address]);
  
  const center = coordinates ? { lat: coordinates.lat, lng: coordinates.lng }: { lat: 48.8584, lng: 2.2945 };

  

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <div className="skeleton-loader"></div>
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <>
      <div className="mapBar">
        <div className="mapSearchBar">
          <div>
            <Autocomplete>
              <input className="mapInput" type='text' placeholder='Origin' ref={originRef} />
            </Autocomplete>
          </div>
          <div>
            <Autocomplete>
              <input
                className="mapInput"
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
              />
            </Autocomplete>
          </div>

          <div className="mapBtnGp">
            <button className="btn btn--primary" type='submit' onClick={calculateRoute}>
              Calculate Route
            </button>
            <button onClick={clearRoute}
            ><Icon className="clearRouteBtn" icon={"ic:baseline-close"}/>
            </button>
          </div>
        </div>
        <div className="mapInfoBar">
          <div>Distance: {distance} </div>
          <div>Duration: {duration} </div>
          <button
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          ><Icon className="recenterBtn" icon={"iconoir:maps-arrow"}/>
          </button>
        </div>
      </div>
      <div className="mapContainer" >
        
        <div className="map">
          
            <GoogleMap
              center={center}
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
              <Marker position={center} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          
        </div>
        
      </div>
    </>
  )
}

export default Map
