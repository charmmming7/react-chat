
import classNames from "classnames";
import React from 'react';
import style from './index.module.scss';

const MessageItem = ({
  timestamp,
  msg,
  isNextDay,
  isSend = false
}: MessageItemContentProps) => {
  const fulldate = new Date(timestamp*1000);
  const year = fulldate.getFullYear();
  const month = fulldate.getMonth()+1;
  const date = fulldate.getDate();
  const hour = fulldate.getHours();
  const minutes = fulldate.getMinutes();
  const fullDateStr = year + '년 ' + month + '월 ' + date + '일';

  return (
    <>
    {isNextDay &&
      <div className={style.message_date}><span className={style.date_txt}>{fullDateStr}</span></div>
    }
    <div
      className={classNames(
        style.message_item,
        isSend && style.is_send
      )}
    >
      <div className={style.message_item_inner}>
        <div className={style.msg}>{msg}</div>
      </div>
      <span className={style.timestamp}>{hour}:{minutes}</span>
    </div>
    </>
  );
};

export default MessageItem;
