import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { socket, SocketContext, SOCKET_EVENT } from "./service/socket";
import List from './pages/List';
import Room from './pages/Room';
import './assets/scss/common/_reset.scss';
import './assets/scss/common/_common.scss';
import './index.css';

function App() {

  useEffect(() => {
    return () => { // App 컴포넌트 unmount시 실행
      socket.disconnect();
    }
  }, []);

  socket.emit(SOCKET_EVENT.JOIN_ROOM); // JOIN_ROOM event type data를 서버에 전송한다.

  return (
    <SocketContext.Provider value={socket}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="" element={<List />}></Route>
          <Route path="/" element={<List />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/room/:1" element={<Room />}></Route>
        </Routes>
      </BrowserRouter>
    </SocketContext.Provider>
  );
}

export default App;
