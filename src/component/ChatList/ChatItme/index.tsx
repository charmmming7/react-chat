import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';

const ChatItem = ({
  index,
  item
}: ChatItemProps) => {

  return (
    <div className={style.chat_item}>
    <Link to={`/room/:${index+1}`} className={style.chat_item_link}>
      <div className={style.user_profile} key={index}>
        <img src={require(`../../../assets/images/png/profile/profile-${index+1}@2x.png`)} alt={item.userName} />
      </div>
      <div className={style.message_content}>
        <strong className={style.message_username}>{item.userName}</strong>
        <p className={style.message_title}>{item.title}</p>
      </div>
      <div className={style.message_info}>
        <span className={style.message_time}>{item.recentTime}</span>
        {item.unreadMsgCnt && <span className={style.message_count}>{item.unreadMsgCnt}</span>}
      </div>
    </Link>
  </div>
  );
};

export default ChatItem;
