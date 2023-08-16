import { styled } from 'styled-components';
import { theme } from '../../styles/theme';
const fontUrl = 'https://fonts.googleapis.com/css2?family=Dokdo&family=Gasoek+One&display=swap';
// 새로운 <link> 태그 생성
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;
// 새로운 <link> 태그 생성

export const RoomMakeBackground = styled.div`
  padding: 10px 40%;
  background-color: ${theme.color.darkgray};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const RoomDiv = styled.div`
  width: 400px;
  height: 45px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.lightgray};
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
`;

export const InputLabel = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  width: 200px;
`;

export const InputBar = styled.input`
  height: 100%;
  font-size: 16px;
  background: white;
  border-radius: 10px;
  font-weight: 600;
  padding: 5px 10px;
  outline: none;
  color: ${({ theme }) => theme.color.darkgray};
`;

export const RoomCreateButton = styled.button`
  background-image: linear-gradient(to bottom, red, pink);
  font-size: 30px;
  font-family: 'Dokdo', cursive;
  border: 2px solid red;
  border-radius: 7px;
  text-align: center;
  padding: 5px 20px;
`;
