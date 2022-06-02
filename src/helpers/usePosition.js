import { useState, useEffect } from 'react';

const usePosition = () => {
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setPosition({
      lat: coords.latitude,
      lng: coords.longitude,
    });
  };

  const onError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const geoLocation = navigator.geolocation;
    if (!geoLocation) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geoLocation.watchPosition(onChange, onError);
    return () => geoLocation.clearWatch(watcher);
  }, []);
  return { ...position, error };
};

export default usePosition;
