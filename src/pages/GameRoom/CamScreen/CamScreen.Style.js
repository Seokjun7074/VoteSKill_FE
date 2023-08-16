import styled from 'styled-components';
import { theme } from 'styles/theme';

export const VideoWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 5px;
  padding: 10px;
`;

export const VideoContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
`;

export const CustomScreen = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserInfoWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.darkgray};
  font-size: 20px;
  font-weight: bold;
  color: whitesmoke;
  box-shadow: 0px 0px 5px 2px ${({ theme }) => theme.color.darkgray};
`;
