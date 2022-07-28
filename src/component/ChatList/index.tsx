import React from 'react';
import ChatItem from './ChatItme';
import style from './index.module.scss';

const ChatList = ({
  messageList
}: ChatListProps) => {

  return (
    <div className={style.chat_list}>
      {messageList
      ?
      messageList?.map((item: ChatListItemProps, index: number) =>  (
        <ChatItem index={index} item={item} key={index}/>
      ))
      :
      <p>채팅 목록이 없습니다.</p>
      }
    </div>
  );
};

export default ChatList;
