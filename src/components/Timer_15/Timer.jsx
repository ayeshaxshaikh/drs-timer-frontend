import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useSocket from '../../hooks/useSocket';
import '../Timer.css'; 

const URL = 'https://drs-timer-backend-fhheakashabcdyb8.canadacentral-01.azurewebsites.net';

function Timer() {
  const { uniqueId } = useParams();
  const [timer, setTimer] = useState(15);
  const [isHidden, setIsHidden] = useState(false);
  const socket = useSocket(URL, uniqueId);

  useEffect(() => {
    if (socket) {
      socket.emit('resetTimer15', uniqueId); 

      socket.on('timerUpdate15', (newTime) => {
        setTimer(newTime);
      });

      socket.on("hideTimer", () => setIsHidden(true));
      socket.on("showTimer", () => setIsHidden(false));


      return () => {
        socket.off("timerUpdate15");
        socket.off("hideTimer");
        socket.off("showTimer");
      };
    }
  }, [socket, uniqueId]);

  if (isHidden) return null;

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
