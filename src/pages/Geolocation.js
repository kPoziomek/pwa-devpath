import { useCallback } from 'react';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import usePosition from '../helpers/usePosition.js';

export const Geolocation = () => {
  const { lat, lng, error } = usePosition();
  const libraries = ['places'];

  const { isLoaded } = useLoadScript({
    id: 'test-map',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const onLoad = useCallback(
    (map) => {
      const maps = window.google.maps;
      let location = new maps.LatLng(lat, lng);
      if (error === null) {
        const LS = localStorage.getItem('location');
        const parsedLS = JSON.parse(LS);

        location = new maps.LatLng(parsedLS);
      }
      const service = new maps.places.PlacesService(map);

      const request = {
        location,
        radius: 1500,
        type: 'restaurant',
      };

      const callback = (results) => {
        const allMarkers = results.map((restaurant) => {
          return new maps.Marker({
            title: restaurant?.name,
            label: restaurant?.name,
            visible: true,
            place: {
              location: restaurant?.geometry?.location,
              placeId: restaurant?.place_id,
            },
          });
        });

        allMarkers.forEach((marker) => {
          marker.setMap(map);
        });
      };

      service.nearbySearch(request, callback);
    },
    [error, lat, lng]
  );

  const onUnmount = useCallback((map) => {}, []);
  if (!isLoaded) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMap
          mapContainerStyle={{ height: '100vh', width: '100%' }}
          center={{ lat, lng }}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={{ lat, lng }} label="You" />
        </GoogleMap>
      </div>
    </>
  );
};

export { Geolocation as default } from './Geolocation.js';
