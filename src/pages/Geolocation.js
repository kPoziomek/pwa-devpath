import { useMemo, useCallback, useState, useEffect } from 'react';
import { useGeolocation } from 'react-use';

import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

export const Geolocation = () => {
  const { latitude: lat, longitude: lng } = useGeolocation();

  const { isLoaded } = useLoadScript({
    id: 'test-map',
    googleMapsApiKey:
      process.env.NODE_ENV === 'development'
        ? process.env.REACT_APP_API_KEY
        : null,
    libraries: ['places', 'directions'],
  });

  const onLoad = useCallback(
    (map) => {
      const maps = window.google.maps;
      let location = null;
      if (!lat && !lng) {
        return (location = new maps.LatLng(49.77, 18.97));
      }
      location = new maps.LatLng(lat, lng);
      const service = new maps.places.PlacesService(map);

      const request = {
        location,
        radius: 500,
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
    [lat, lng]
  );

  const onUnmount = useCallback((map) => {}, []);

  return (
    isLoaded && (
      <>
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMap
            mapContainerStyle={{ height: '100vh', width: '100%' }}
            center={{ lat, lng }}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker position={{ lat, lng }} title="YourLocation" />
          </GoogleMap>
        </div>
      </>
    )
  );
};

export { Geolocation as default } from './Geolocation.js';
