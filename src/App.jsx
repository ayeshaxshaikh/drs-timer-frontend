import React, { lazy, Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const Timer_15 = lazy(() => import('./components/Timer_15/Timer'));
const TimerControl_15 = lazy(() => import('./components/Timer_15/TimerControl'));

const Timer_2 = lazy(() => import('./components/Timer_2/Timer'));
const TimerControl_2 = lazy(() => import('./components/Timer_2/TimerControl'));

const Timer_4 = lazy(() => import('./components/Timer_4/Timer'));
const TimerControl_4 = lazy(() => import('./components/Timer_4/TimerControl'));

const TimerCreation = lazy(() => import('./components/TimerCreation'));


function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
      <div style={{display: 'flex'}}>
      <Routes>
      <Route path="/" element={<TimerCreation />} />
        <Route path="/15s/:uniqueId" element={<Timer_15 />} />
        <Route path="/15s/:uniqueId/button" element={<TimerControl_15 />} />
        <Route path="/2s/:uniqueId" element={<Timer_2 />} />
        <Route path="/2s/:uniqueId/button" element={<TimerControl_2 />} />
        <Route path="/4s/:uniqueId" element={<Timer_4 />} />
        <Route path="/4s/:uniqueId/button" element={<TimerControl_4 />} />
      </Routes>
      </div>
    </Suspense>
  );
}

export default App;
