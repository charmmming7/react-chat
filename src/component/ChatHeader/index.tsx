import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import style from './index.module.scss';
import { ReactComponent as IconMenu } from '../../assets/images/svg/menu.svg';
import { ReactComponent as IconMy } from '../../assets/images/svg/my.svg';
import { ReactComponent as IconBack } from '../../assets/images/svg/back.svg';
import { ReactComponent as IconUpload } from '../../assets/images/svg/upload.svg';
import { ReactComponent as IconSearch } from '../../assets/images/svg/search.svg';

const ChatHeader = ({
  type = 'default',
  title = '채팅',
  isExpanded = false,
}: ChatHeaderProps) => {

  return (
    <header
      className={classnames(
        style.header,
        type === 'room' ? 'room' : ''
      )}
    >
      {type === 'default'
      ?
        <button
        type='button'
        className={style.btn_menu}
        aria-expanded={isExpanded}
        aria-label='메뉴 열기'
        ><IconMenu /></button>
      :
      <Link
      to="/list"
      className={style.btn_back}
      aria-label='채팅 목록으로 가기'
      >
        <IconBack />
      </Link>
      }
      <h1 className={style.title}>{title}</h1>
      <div className={style.btn_group_right}>
        {type === 'default'
        ?
        <Link
        to="/list"
        className={style.btn_my}
        aria-label='마이페이지로 가기'
        >
          <IconMy />
        </Link>
        :
        <>
        <button
          type='button'
          className={style.btn_upload}
          aria-label='사진 업로드 하기'
          ><IconUpload /></button>
        <button
          type='button'
          className={style.btn_search}
          aria-label='검색하기'
          ><IconSearch /></button>
        </>
        }
      </div>
    </header>
  );
};

export default ChatHeader;
