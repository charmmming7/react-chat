import React from 'react';
import style from './index.module.scss';
import ChatHeader from 'component/ChatHeader';
import classNames from "classnames";

const ChatTemplate = ({
  type,
  title,
  isExpanded,
  children
}: ChatTemplateProps) => {
  return (
    <div className={style.chat_template}>
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

export default ChatTemplate;
