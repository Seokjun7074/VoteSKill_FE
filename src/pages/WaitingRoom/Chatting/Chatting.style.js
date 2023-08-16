import { styled } from 'styled-components';

export const Chat = styled.div`
  width: 50%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ChattingContainer = styled.div`
  height: 470px;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  background-color: ${({ theme }) => theme.color.lightgray};
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ChattingDivider = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ $mymessage }) => ($mymessage ? 'end' : 'start')};
`;

export const ChatBubble = styled.div`
  min-width: 20%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  text-align: ${({ $mymessage }) => ($mymessage ? 'end' : 'start')};
  margin: 5px 0;
`;

export const MessageBox = styled.div`
  padding: 10px;
  overflow-wrap: break-word;
  text-align: ${({ $mymessage }) => ($mymessage ? 'end' : 'start')};
  background-color: ${({ theme, $mymessage }) => ($mymessage ? theme.color.gray : theme.color.brown)};
  color: ${({ theme, $mymessage }) => ($mymessage ? theme.color.lightgray : theme.color.lightgray)};
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;

export const ChatNickname = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  padding: 3px;
`;

export const ChatMessage = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const BottomBar = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const InputBar = styled.input`
  padding: 10px;
  font-size: 16px;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  width: 85%;
  font-weight: bold;
`;

export const SendButton = styled.button`
  padding: 0px 15px;
  color: ${({ theme }) => theme.color.lightgray};
  background-color: ${({ theme }) => theme.color.darkgray};
  border-radius: 10px;
  font-weight: bold;
`;
