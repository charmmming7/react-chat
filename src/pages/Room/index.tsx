import React, {useState, useEffect, useContext, useCallback} from 'react';
import { SocketContext, SOCKET_EVENT, makeMessage } from "../../service/socket";
import ChatRoom from 'component/ChatRoom';
import MessageList from 'component/MessageList';
import MessageInputArea from 'component/MessageInputArea'

const Room = () => {
  const socket = useContext(SocketContext);
  const [userInfo, setUserInfo] = useState<MessageInfoProps>({userId: 1, userName: '사용자'});
  const [receivedMessageData, setReceivedMessageData] = useState<MessageContentProps[]>([]);
  const [sendMessageData, setSendMessageData] = useState<MessageContentProps[]>([]);
  const [moveScrollBottom, setMoveScrollBottom] = useState<boolean>(false);

  const [messages, setMessages] = useState<any[]>([]);

  // RECEIVE_MESSAGE 이벤트 콜백: messages state에 데이터를 추가
  const handleReceiveMessage = useCallback(pongData => {
    const newMessage = makeMessage(pongData);
    console.log("채팅룸 접속시간: ", newMessage.time);
      setMessages(messages => [...messages, newMessage]);
      console.log(messages);
      setMoveScrollBottom(!moveScrollBottom);
    }, [moveScrollBottom]
  );

  useEffect(() => {
    // 데이터 받는 부분
    const fetchData = async () => {
      /* TODO: 데이터 구조 아래와 같이 변경 후 적용 필요
        {
          "userInfo": {
            "userId": 1,
            "userName": "장만월 사장님",
          },
          "messages": {
            "message-id": 123456789,
            "timestamp": 1588775640,
            "msg": "출근했니?"
          }
        }
      */
      const data = {
        "userInfo": {
          "userId": 1,
          "userName": "장만월 사장님",
        },
        "content": [
          {
            "timestamp": 1661128200,
            "msg": "출근했니?"
          },
          {
            "timestamp": 1661128260,
            "msg": "출근했냐구?"
          },
          {
            "timestamp": 1661214780,
            "msg": "어딘데 출근 안하니?"
          },
        ]
      };
      const userInfo = data.userInfo;
      const content = data.content;
      setUserInfo(userInfo);
      setReceivedMessageData(content);
    }
    fetchData();
  }, []);

  useEffect(() => {
    socket.on(SOCKET_EVENT.RECEIVE_MESSAGE, handleReceiveMessage); // 이벤트 리스너 설치

    return () => {
      socket.off(SOCKET_EVENT.RECEIVE_MESSAGE, handleReceiveMessage); // 이벤트 리스너 해제
    };
  }, [socket, handleReceiveMessage]);

  return (
    <ChatRoom type="room" title={userInfo.userName} isExpanded={false}>
      <MessageList receivedMessageData={receivedMessageData} sendMessageData={sendMessageData}
        moveScrollBottom={moveScrollBottom}
      />
      <MessageInputArea setSendMessageList={setSendMessageData} />
    </ChatRoom>
  );
};

export default Room;
