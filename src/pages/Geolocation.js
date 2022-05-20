import GoogleMapReact from 'google-map-react';
import { useEffect, useState, useRef } from 'react';
import { useGeolocation } from 'react-use';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { IconButton } from '@mui/material';
const MapMarker = ({ text }) => {
  return (
    <div>
      <MyLocationIcon></MyLocationIcon>
      <span>{text}</span>
    </div>
  );
};

function MyMapComponent({ center, zoom }) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

export const Geolocation = () => {
  useEffect(() => {}, []);
  const state = useGeolocation();
  const [myPosition, setMyPosition] = useState({ lat: 49.81, lng: 19.04 });
  const [zoom, setZoom] = useState(10);
  const [defaultData, setDefaultData] = useState({
    center: {
      at: 49.8,
      lng: 19.01,
    },
    zoom: 10,
  });

  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          libraries: ['places', 'directions'],
        }}
        defaultCenter={myPosition}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
      >
        <MapMarker
          lat={myPosition.lat}
          lng={myPosition.lng}
          text="YourLocation"
        />
      </GoogleMapReact>
    </div>
  );
};

export { Geolocation as default } from './Geolocation.js';
