import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Alert, AlertTitle, Stack } from '@mui/material';
import './App.css';
import Navigation from './pages/Navigation';
import PWAOfflineStatus from './pages/PWAOfflineStatus';
import { useNetworkState } from 'react-use';
import { useTranslation } from 'react-i18next';
const Home = lazy(() => import('./pages/Home'));
const Geolocation = lazy(() => import('./pages/Geolocation'));
const Notes = lazy(() => import('./pages/Notes'));
const Camera = lazy(() => import('./pages/Camera'));
const QrCode = lazy(() => import('./pages/QrCode'));
const Device = lazy(() => import('./pages/Device'));
const Weather = lazy(() => import('./pages/Weather'));

function App() {
  const { t } = useTranslation();
  const { online } = useNetworkState();

  return !online ? (
    <>
      <Stack>
        <Alert severity="warning" sx={{ justifyContent: 'center' }}>
          <AlertTitle>Warning</AlertTitle>
          You are offline.
          <strong>Try to find a internet connection.</strong>
        </Alert>
      </Stack>
    </>
  ) : (
    <div className="App">
      <Router>
        <Navigation />
        <PWAOfflineStatus />
        <h1>{t('app_title')}</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/geolocation" element={<Geolocation />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/qr" element={<QrCode />} />
            <Route path="/device" element={<Device />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
