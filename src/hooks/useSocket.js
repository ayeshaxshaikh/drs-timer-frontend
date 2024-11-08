import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useSocket = (url, uniqueId) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io(url);
    setSocket(socketInstance);

    socketInstance.emit('joinRoom', uniqueId);

    return () => {
      socketInstance.disconnect();
    };
  }, [url, uniqueId]);

  return socket;
};

export default useSocket;
