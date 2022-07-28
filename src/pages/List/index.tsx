import React, {useEffect, useState} from 'react';
import ChatTemplate from 'component/ChatTemplate';
import ChatList from 'component/ChatList';

const List = () => {

  const [messageList, setmessageList] = useState<ChatListItemProps[]>([]);

  useEffect(() => {
    // 데이터 받는 부분
    const fetchData = async () => {
      const data = [
        {
          "userId": 1,
          "userName": "장만월 사장님",
          "id": 1,
          "title": "어딘데 출근 안하니, 죽고싶니?",
          "recentTime": "09:32",
          "isRead": false,
          "unreadMsgCnt": 2
        },
        {
          "userId": 2,
          "userName": "신정근 바텐더",
          "id": 2,
          "title": "오시는 길에 와인 몇병만 사다주세요.",
          "recentTime": "02:34",
          "isRead": true
        },
        {
          "userId": 3,
          "userName": "이미라 의사",
          "id": 3,
          "title": "휴가 잘 보내고 계신가요? 다름이 아니라 지금 휴가 잘 보내고 계신가요? 다름이 아니라 지금 휴가 잘 보내고 계신가요? 다름이 아니라 지금",
          "recentTime": "목요일", // 대화방 정렬 순서상 금요일 -> 목요일 일 수 없어서 디자인과 다르게 데이터 변경.
          "isRead": true
        },
        {
          "userId": 4,
          "userName": "구찬성 지배인",
          "id": 4,
          "title": "아 휴가셨군요. 약속은 다음으로 미루시죠!",
          "recentTime": "목요일",
          "isRead": true
        },
        {
          "userId": 5,
          "userName": "노준석 총지배인",
          "id": 5,
          "title": "휴가에서 언제 돌아오시는지요. 돌아오시면 논의드릴 부분이 있습니다.",
          "recentTime": "금요일",
          "isRead": true
        },
        {
          "userId": 6,
          "userName": "김유나 인턴",
          "id": 6,
          "title": "304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ",
          "recentTime": "금요일",
          "isRead": true
        },
        {
          "userId": 7,
          "userName": "구현모",
          "id": 7,
          "title": "술먹자",
          "recentTime": "수요일",
          "isRead": true
        },
      ];
      setmessageList(data);
    }
    fetchData();
  }, []);

return (
    <ChatTemplate type="default" title="채팅" isExpanded={false}>
      <ChatList messageList={messageList}/>
    </ChatTemplate>
  );
};

export default List;
