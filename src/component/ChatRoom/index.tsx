import React from 'react';
import style from './index.module.scss';
import ChatHeader from 'component/ChatHeader';
import classNames from "classnames";

const ChatRoom = ({
  type,
  title,
  isExpanded,
  children
}: ChatRoomProps) => {
  return (
    <div className={style.chat_room}>
      <ChatHeader type={type} title={title} isExpanded={isExpanded}/>
      <div className={classNames(
        style.chat_content,
        type === 'room' ? style.room : ''
      )}>
      {children}
      </div>
    </div>
  );
};

export default ChatRoom;
