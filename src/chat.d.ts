
declare interface ChatHeaderProps {
  /** 헤더 타입 (default, room) */
  type?: string;
  /** 헤더 타이틀 */
  title: string;
  /** 메뉴 확장 여부 */
  isExpanded?: boolean;
}

declare interface ChatListItemProps {
  userId: number,
  userName: string,
  id: number,
  title: string,
  recentTime: string,
  isRead: boolean,
  unreadMsgCnt?: number
}

declare interface ChatItemProps {
  index: number,
  item: ChatListItemProps
}

declare interface ChatListProps {
  messageList?: Array<ChatListItemProps>
}

declare interface MessageInfoProps {
  userId: number,
  userName: string
}

declare interface MessageContentProps {
  timestamp: number,
  msg: string
}

declare interface MessageItemContentProps extends MessageContentProps {
  isNextDay?: boolean,
  isSend?: boolean
}

declare interface MessageDataProps {
  receivedMessageData?: ReceivedMessageContentProps[]
  sendMessageData?: MessageContentProps[],
  moveScrollBottom?: boolean;
}

interface MessageInputAreaProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setSendMessageList: any
}

interface ChatRoomProps extends ChatHeaderProps {
  /** children 데이터 */
  children?: React.ReactNode;
}
