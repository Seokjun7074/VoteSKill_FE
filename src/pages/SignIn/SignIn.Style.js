import styled from 'styled-components';

// 구글 폰트 스타일 시트 URL 생성
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&display=swap';

// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;

// <head> 요소에 <link> 태그 추가
document.head.appendChild(link);

export const SignInDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 10%;
  margin: auto;
  gap: 20px;
`;

export const NickName = styled.input`
  width: 25%;
  height: 50px;
  font-size: 2em;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  margin: 0 auto;
  border-radius: 10px;
  font-family: 'Dokdo', cursive;
  box-shadow: 0px 2px 5px 1px ${({ theme }) => theme.color.red};
`;

export const Button = styled.button`
  width: 25%;
  height: 50px;
  margin: 0 auto;
  color: ${({ theme, $grow }) => ($grow ? theme.color.red : theme.color.darkgray)};
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: ${({ $grow }) => ($grow ? 'null' : '0px 2px 5px 1px black')};
  background-color: ${({ theme, $grow }) => ($grow ? theme.color.darkgray : theme.color.red)};
  font-family: 'Dokdo', cursive;
  transition: all ease 0.3s 0s;
`;
