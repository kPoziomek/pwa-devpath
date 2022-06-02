import { useCallback, useState } from 'react';

export const useDeviceOrientation = () => {
  const [error, setError] = useState(null);
  const [orientation, setOrientation] = useState(null);

  const handleDeviceOrientation = useCallback(({ alpha, beta, gama }) => {
    setOrientation({
      alpha: Math.floor(alpha),
      beta: Math.floor(beta),
      gama: Math.floor(gama),
    });
  }, []);

  const revokeAccessAsync = async () => {
    window.removeEventListener('devicemotion', handleDeviceOrientation);
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

    window.addEventListener('deviceorientation', handleDeviceOrientation);

    return true;
  };

  const requestAccess = useCallback(requestAccessAsync, [
    handleDeviceOrientation,
  ]);
  const revokeAccess = useCallback(revokeAccessAsync, [
    handleDeviceOrientation,
  ]);

  return {
    orientation,
    error,
    requestAccess,
    revokeAccess,
  };
};
