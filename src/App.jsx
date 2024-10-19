import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const Timer = lazy(() => import('./components/Timer'));
const TimerControl = lazy(() => import('./components/TimerControl'));
const TimerCreation = lazy(() => import('./components/TimerCreation'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<TimerCreation />} />
        <Route path="/:uniqueId" element={<Timer />} />
        <Route path="/:uniqueId/button" element={<TimerControl />} />
      </Routes>
    </Suspense>
  );
}

export default App;
