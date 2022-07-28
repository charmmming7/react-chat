import React from 'react';
import MessageItem from './MessageItem';
import style from './index.module.scss';

const MessageList = ({
  receivedMessageData,
  sendMessageData
}: MessageDataProps) => {
  let beforeDate:number;
  let currentDate:number;

  return (
    <div
      className={style.chat_room}
    >
      {receivedMessageData?.map((item: MessageItemContentProps, index: number) => {
        {
          let beforeItem:MessageItemContentProps;
          const fulldate = new Date(item.timestamp*1000);
          const date = fulldate.getDate();
          currentDate = date;

          if(index >= 1) {
            beforeItem = receivedMessageData[index-1];
            const beforeFullDate = new Date(beforeItem.timestamp*1000);
            beforeDate = beforeFullDate.getDate();
          }
        }
        return (
          <MessageItem timestamp={item.timestamp} msg={item.msg} isNextDay={index !== 0 && currentDate !== beforeDate} key={index}/>
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
        }
        return (
          <MessageItem isSend={true} timestamp={item.timestamp} msg={item.msg} isNextDay={index !== 0 && currentDate !== beforeDate} key={index}/>
        );
      })}
    </div>
  );
};

export default MessageList;
