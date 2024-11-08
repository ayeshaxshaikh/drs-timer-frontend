import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useSocket from '../../hooks/useSocket';
import '../Timer.css'; 

const URL = 'https://drs-timer-backend-fhheakashabcdyb8.canadacentral-01.azurewebsites.net';

function Timer() {
  const { uniqueId } = useParams();
  const [timer, setTimer] = useState(2);
  const socket = useSocket(URL, uniqueId);

  useEffect(() => {
    if (socket) {
      socket.emit('resetTimer2', uniqueId); 

      socket.on('timerUpdate2', (newTime) => {
        setTimer(newTime);
      });

      return () => {
        socket.off('timerUpdate2');
      };
    }
  }, [socket, uniqueId]);

  return (
    <div className="container">
      <div className="timer-container">
        <div className="text">
          <p>Review Timer</p>
        </div>
        <div className="timer-overlay">
          <p>{timer}</p>
        </div>
      </div>
    </div>
  );
}

export default Timer;


