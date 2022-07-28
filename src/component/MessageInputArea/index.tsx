import React, {useState, useCallback, useEffect} from 'react';
import style from './index.module.scss';
import { ReactComponent as IconSend } from '../../assets/images/svg/send.svg';

const MessageInputArea = ({
  setSendMessageList
}: MessageInputAreaProps
) => {

  const [typeMessage, setTypeMessage] = useState<string>('');
  const [sendMessageData, setSendMessageData] = useState<MessageContentProps[]>([]);

  const handleChangeTypeMessage = useCallback(event => {
    setTypeMessage(event.target.value);
  }, []);

  const handleSendMesssage = useCallback((e) => {
    e.preventDefault(); // 새로고침 방지
    const noContent = typeMessage.trim() === '';

    if (noContent) {
      return;
    }

    setSendMessageData([...sendMessageData, {
      timestamp: + new Date(),
      msg: typeMessage
    }]);

    setTypeMessage('');
  }, [typeMessage]);

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
        value={typeMessage}
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
