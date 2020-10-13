import React, { useEffect } from 'react';
import io from 'socket.io-client';

const Lobby = () => {
  useEffect(() => {
    const socket = io('http://localhost:8000', {
      path: '/lobby'
    });

    socket.on('new user', data => {
      console.log(data);
    });
  }, []);

  return (
    <div>Lobby</div>
  );
};

export default Lobby;
