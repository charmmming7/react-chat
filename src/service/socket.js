import { createContext } from "react";
import socketIo from "socket.io-client";

const dayjs = require('dayjs');

export const SOCKET_EVENT = {
  JOIN_ROOM: "JOIN_ROOM",
  SEND_MESSAGE: "SEND_MESSAGE",
  RECEIVE_MESSAGE: "RECEIVE_MESSAGE",
};

export const socket = socketIo(String(process.env.REACT_APP_BACK_URL), { withCredentials: true });
export const SocketContext = createContext(socket);

socket.on("connect", () => {
  console.log("socket server connected.");
});

socket.on("disconnect", () => {
  console.log("socket server disconnected.");
});


// makeMessage (서버에서 받은 데이터를 화면에 보여줄 수 있게 텍스트로 가공해 반환해주는 함수)
export const makeMessage = pongData => {
  const {time} = pongData;

  return {
    time: dayjs(time).format("HH:mm")
  }
};
