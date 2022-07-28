import React, {useState, useEffect} from 'react';
import ChatTemplate from 'component/ChatTemplate';
import MessageList from 'component/MessageList';
import MessageInputArea from 'component/MessageInputArea'

const Room = () => {
  const [userInfo, setUserInfo] = useState<MessageInfoProps>({userId: 1, userName: '사용자'});
  const [receivedMessageData, setReceivedMessageData] = useState<MessageContentProps[]>([]);
  const [sendMessageData, setSendMessageData] = useState<MessageContentProps[]>([]);

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
            "timestamp": 1588775640,
            "msg": "출근했니?"
          },
          {
            "timestamp": 1588775700,
            "msg": "출근했냐구?"
          },
          {
            "timestamp": 1588862160,
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

  return (
    <ChatTemplate type="room" title={userInfo.userName} isExpanded={false}>
      <MessageList receivedMessageData={receivedMessageData} sendMessageData={sendMessageData} />
      <MessageInputArea setSendMessageList={setSendMessageData} />
    </ChatTemplate>
  );
};

export default Room;
