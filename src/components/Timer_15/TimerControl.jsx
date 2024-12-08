import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useSocket from '../../hooks/useSocket';
import '../Timer.css';

const URL = 'https://drs-timer-backend-fhheakashabcdyb8.canadacentral-01.azurewebsites.net';

function TimerControl() {
  const { uniqueId } = useParams();
  const [time, setTime] = useState(15);
  const [isRunning, setIsRunning] = useState(false);
  const socket = useSocket(URL, uniqueId);
  const [isHide, setIsHide] = useState(false)

  useEffect(() => {
    if (socket) {
      socket.emit('resetTimer15', uniqueId);

      socket.on('timerUpdate15', (newTime) => {
        setTime(newTime);
        setIsRunning(newTime !== 15);
      });

      return () => {
        socket.off('timerUpdate15');
      };
    }
  }, [socket, uniqueId]);

  const handleStartTimer = useCallback(() => {
    setIsHide(false)
    setIsRunning(true);
    socket.emit('startTimer15', uniqueId);
  }, [socket, uniqueId]);

  const handleResetTimer = useCallback(() => {
    setTime(15);
    setIsRunning(false);
    socket.emit('resetTimer15', uniqueId);
  }, [socket, uniqueId]);

  const handleHideTimer = () => {
    setIsHide(true);
    socket.emit('hideTimer', uniqueId);  // Notify Timer page
  };
  

  const startDisabled = useMemo(() => isRunning || time !== 15, [isRunning, time]);
  const resetDisabled = useMemo(() => !isRunning || time === 15, [isRunning, time]);

  return (
    <div className="control-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {
        !isHide && (
          <div className="timer-container">
        <div className="text">
          <p>Review Timer</p>
        </div>
        <div className="timer-overlay">
          <p>{time}</p>
        </div>
      </div>
        )
      }

      <div className="button-container">
        <button onClick={handleStartTimer} disabled={startDisabled}>
          Start Timer
        </button>
        <button onClick={handleResetTimer} disabled={resetDisabled} style={{ marginLeft: '10px' }}>
          Reset Timer
        </button>
        <button onClick={handleHideTimer} style={{ marginLeft: '10px' }}>Hide Timer</button>
      </div>
    </div>
  );
}

export default TimerControl;
