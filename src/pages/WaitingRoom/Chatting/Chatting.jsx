import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from 'pages/WaitingRoom/Chatting/Chatting.style';
function Chatting({ messageList, sendMessage }) {
  const [inputMessage, setInputMessage] = useState({ message: '', nickname: 'testnickname' });
  const messageEndRef = useRef();

  useEffect(() => {
    messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  const handleInputMessage = (e) => {
    setInputMessage({ ...inputMessage, message: e.target.value });
  };

  const sendChatting = () => {
    if (isEmptyMessage()) return;
    sendMessage(inputMessage);
    setInputMessage({ ...inputMessage, message: '' });
  };

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') sendChatting();
  };

  const isEmptyMessage = () => inputMessage.message.length === 0;

  const isMyMessage = useCallback((msg) => {
    const nickname = sessionStorage.getItem('nickname');
    return msg.nickname === nickname;
  }, []);

  return (
    <S.Chat>
      <S.ChattingContainer>
        {messageList.map((msg, idx) => (
          <S.ChattingDivider key={idx} $mymessage={isMyMessage(msg)}>
            <S.ChatBubble $mymessage={isMyMessage(msg)}>
              <S.ChatNickname>{msg.nickname}</S.ChatNickname>
              <S.MessageBox $mymessage={isMyMessage(msg)}>
                <S.ChatMessage>{msg.message}</S.ChatMessage>
              </S.MessageBox>
            </S.ChatBubble>
          </S.ChattingDivider>
        ))}
        <div ref={messageEndRef}></div>
      </S.ChattingContainer>
      <S.BottomBar>
        <S.InputBar
          placeholder="메세지를 입력하세요."
          onChange={handleInputMessage}
          value={inputMessage.message}
          onKeyDown={handleOnKeyPress}
        />
        <S.SendButton onClick={sendChatting}>입력</S.SendButton>
      </S.BottomBar>
    </S.Chat>
  );
}

export default Chatting;
