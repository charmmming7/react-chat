import React, {useState, useCallback, useEffect, useContext} from 'react';
import { SocketContext, SOCKET_EVENT } from "../../service/socket";
import style from './index.module.scss';
import { ReactComponent as IconSend } from '../../assets/images/svg/send.svg';
// const dayjs = require('dayjs');

const MessageInputArea = ({
  setSendMessageList
}: MessageInputAreaProps
) => {
  const socket = useContext(SocketContext);
  const [typeMessage, setTypeMessage] = useState<string>('');
  const [sendMessageData, setSendMessageData] = useState<MessageContentProps[]>([]);

  const handleChangeTypeMessage = useCallback(event => {
    setTypeMessage(event.target.value);
  }, []);

  const handleSendMesssage = useCallback((e: any) => {
    e.preventDefault(); // 새로고침 방지
    const noContent = typeMessage.trim() === '';

    if (noContent) {
      return;
    }

    setSendMessageData([...sendMessageData, {
      timestamp: new Date().getTime() / 1000,
      // timestamp: dayjs(new Date()).format("HH:mm"),
      msg: typeMessage
    }]);

    // 메시지가 있으면 nickname과 message를 SEND_MESSAGE 이벤트 타입과 함께 소켓 서버로 전송합니다.
    socket.emit(SOCKET_EVENT.SEND_MESSAGE, {
      content: typeMessage,
    });

    setTypeMessage('');
  }, [typeMessage, sendMessageData]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter') {
      handleSendMesssage(e);
    }
  }

  useEffect(() => {
    setSendMessageList(sendMessageData);
  });

  return (
    <div className={style.message_input_area}>
      <input
        type="text"
        className={style.message_input}
        placeholder="메시지를 입력하세요.."
        onChange={handleChangeTypeMessage}
        onKeyDown={handleKeyDown}
        value={typeMessage}
        autoComplete="off"
      />
      <button
        type="submit"
        className={style.btn_submit}
        aria-label="전송하기"
        onClick={handleSendMesssage}
      >
        <IconSend />
      </button>
    </div>
  );
};

export default MessageInputArea;
