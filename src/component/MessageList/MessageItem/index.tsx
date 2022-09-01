
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
  let hour = fulldate.getHours();
  let minutes = fulldate.getMinutes();
  let newMinutes = minutes > 9 ? minutes : '0' + minutes;
  const fullDateStr = year + '년 ' + month + '월 ' + date + '일';
  let ampm = '오전';

  if(hour > 12) {
    hour = hour - 12;
    ampm = '오후';
  }

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
      <span className={style.timestamp}>{ampm} {hour}:{newMinutes}</span>
    </div>
    </>
  );
};

export default MessageItem;
