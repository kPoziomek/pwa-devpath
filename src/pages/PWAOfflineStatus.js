import { Alert, AlertTitle, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';

export const PWAOfflineStatus = () => {
  const [isOnline, setOnlineStatus] = useState(true);
  useEffect(() => {
    const setFromEvent = (event) => {
      if (event.type === 'online') {
        setOnlineStatus(true);
      } else if (event.type === 'offline') {
        setOnlineStatus(false);
      }
    };
    window.addEventListener('online', setFromEvent);
    window.addEventListener('offline', setFromEvent);

    return () => {
      window.removeEventListener('online', setFromEvent);
      window.removeEventListener('offline', setFromEvent);
    };
  });
  return !isOnline ? (
    <>
      <Stack>
        <Alert severity="warning" sx={{ justifyContent: 'center' }}>
          <AlertTitle>Warning</AlertTitle>
          You are currently offline.{' '}
          <strong>Access to the application might be limited.</strong>
        </Alert>
      </Stack>
    </>
  ) : null;
};
export { PWAOfflineStatus as default } from './PWAOfflineStatus.js';
