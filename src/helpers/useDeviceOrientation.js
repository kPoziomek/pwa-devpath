import { useCallback, useEffect, useState } from 'react';

export const useDeviceOrientation = () => {
  const [error, setError] = useState(null);
  const [orientation, setOrientation] = useState(null);

  const onDeviceOrientation = (e) => {
    setOrientation({
      alpha: e.alpha,
      beta: e.beta,
      gama: e.gama,
    });
  };

  const revokeAccessAsync = async () => {
    window.removeEventListener('devicemotion', onDeviceOrientation);
    setOrientation(null);
  };

  const requestAccessAsync = async () => {
    if (!DeviceOrientationEvent) {
      setError(
        new Error('Device orientation event is not supported by your browser')
      );
      return false;
    }

    if (
      DeviceOrientationEvent.requestPermission &&
      typeof DeviceMotionEvent.requestPermission === 'function'
    ) {
      let permission = null;
      try {
        permission = await DeviceOrientationEvent.requestPermission();
      } catch (err) {
        setError(err);
        return false;
      }
      if (permission !== 'granted') {
        setError(
          new Error('Request to access the device orientation was rejected')
        );
        return false;
      }
    }

    window.addEventListener('deviceorientation', onDeviceOrientation);

    return true;
  };

  const requestAccess = useCallback(requestAccessAsync, []);
  const revokeAccess = useCallback(revokeAccessAsync, []);

  return {
    orientation,
    error,
    requestAccess,
    revokeAccess,
  };
};
