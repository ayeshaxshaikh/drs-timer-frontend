import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useSocket from '../../hooks/useSocket';
import '../Timer.css';

const URL = 'https://drs-timer-backend-fhheakashabcdyb8.canadacentral-01.azurewebsites.net';

function TimerControl() {
  const { uniqueId } = useParams();
  const [time, setTime] = useState(2);
  const [isRunning, setIsRunning] = useState(false);
  const socket = useSocket(URL, uniqueId);

  useEffect(() => {
    if (socket) {
      socket.emit('resetTimer2', uniqueId);

      socket.on('timerUpdate2', (newTime) => {
        setTime(newTime);
        setIsRunning(newTime !== 2);
      });

      return () => {
        socket.off('timerUpdate2');
      };
    }
  }, [socket, uniqueId]);

  const handleStartTimer = useCallback(() => {
    setIsRunning(true);
    socket.emit('startTimer2', uniqueId);
  }, [socket, uniqueId]);

  const handleResetTimer = useCallback(() => {
    setTime(2);
    setIsRunning(false);
    socket.emit('resetTimer2', uniqueId);
  }, [socket, uniqueId]);

  const startDisabled = useMemo(() => isRunning || time !== 2, [isRunning, time]);
  const resetDisabled = useMemo(() => !isRunning || time === 2, [isRunning, time]);

  return (
    <div className="control-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="timer-container">
        <div className="text">
          <p>Review Timer</p>
        </div>
        <div className="timer-overlay">
          <p>{time}</p>
        </div>
      </div>

      <div className="button-container">
        <button onClick={handleStartTimer} disabled={startDisabled}>
          Start Timer
        </button>
        <button onClick={handleResetTimer} disabled={resetDisabled} style={{ marginLeft: '10px' }}>
          Reset Timer
        </button>
      </div>
    </div>
  );
}

export default TimerControl;

