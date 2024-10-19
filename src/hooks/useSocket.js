import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useSocket = (url, uniqueId) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io(url);
    setSocket(socketInstance);

    socketInstance.emit('joinRoom', uniqueId);

    return () => {
      socketInstance.disconnect(); // Clean up the connection when the component unmounts
    };
  }, [url, uniqueId]);

  return socket;
};

export default useSocket;
