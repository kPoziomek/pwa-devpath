import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './pages/Navigation';

const Home = lazy(() => import('./pages/Home'));
const Geolocation = lazy(() => import('./pages/Geolocation'));
const Notes = lazy(() => import('./pages/Notes'));
const Camera = lazy(() => import('./pages/Camera'));
const Device = lazy(() => import('./pages/Device'));

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <h1>PWA APP SELLEO</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/geolocation" element={<Geolocation />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/camera" element={<Camera />} />
            <Route path="/device" element={<Device />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
