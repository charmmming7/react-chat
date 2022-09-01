import React, {useRef, useCallback, useEffect, useState} from 'react';
import MessageItem from './MessageItem';
import style from './index.module.scss';
// const dayjs = require('dayjs');

const MessageList = ({
  receivedMessageData,
  sendMessageData,
  moveScrollBottom = false
}: MessageDataProps) => {
  const chatWindow = useRef<HTMLDivElement>(null);
  const [moveScroll, setMoveScroll] = useState<boolean>(moveScrollBottom);
  let beforeDate:number;
  let currentDate:number;
  let lastReceivedTime:object;
  let isEqualDate:boolean;

  // 새 메시지를 받으면 스크롤을 이동하는 함수
  const moveScrollToReceiveMessage = useCallback(() => {
    if (chatWindow.current) {
      chatWindow.current.scrollTo({
        top: chatWindow.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    moveScrollToReceiveMessage();
  }, [moveScrollBottom]);

  return (
    <div
      className={style.chat_room}
      ref={chatWindow}
    >
      {receivedMessageData?.map((item: MessageItemContentProps, index: number) => {
        {
          let beforeItem:MessageItemContentProps;
          // currentDate = dayjs.unix(item.timestamp).format("YYYY-MM-DD");
          const fulldate = new Date(item.timestamp*1000);
          const date = fulldate.getDate();
          currentDate = date;

          if(index >= 1) {
            beforeItem = receivedMessageData[index-1];
            // beforeDate = dayjs.unix(beforeItem.timestamp).format("YYYY-MM-DD");
            const beforeFullDate = new Date(beforeItem.timestamp*1000);
            beforeDate = beforeFullDate.getDate();
          }

          if(index === receivedMessageData.length - 1) {
            lastReceivedTime = {
              year: new Date(item.timestamp*1000).getFullYear(),
              month: new Date(item.timestamp*1000).getMonth(),
              day: new Date(item.timestamp*1000).getDay()
            };
          }
        }
        return (
          <MessageItem timestamp={item.timestamp} msg={item.msg} isNextDay={currentDate !== beforeDate} key={index}/>
        );
      })}
      {sendMessageData?.map((item: MessageContentProps, index: number) => {
        {
          let beforeItem:MessageItemContentProps;
          const fulldate = new Date(item.timestamp*1000);
          const date = fulldate.getDate();
          currentDate = date;

          if(index >= 1) {
            beforeItem = sendMessageData[index-1];
            const beforeFullDate = new Date(beforeItem.timestamp*1000);
            beforeDate = beforeFullDate.getDate();
          }

          const recentSendTime = {
            year: fulldate.getFullYear(),
            month: fulldate.getMonth(),
            day: fulldate.getDay()
          };

          isEqualDate = Object.entries(lastReceivedTime).toString() === Object.entries(recentSendTime).toString();
        }
        return (
          <MessageItem isSend={true} timestamp={item.timestamp} msg={item.msg} isNextDay={currentDate !== beforeDate && !isEqualDate} key={index}/>
        );
      })}
    </div>
  );
};

export default MessageList;
