import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const UserInfoBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.color.darkgray};
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Profile = styled.img`
  width: 200px;
  height: 170px;
  border-radius: 20px;
`;
export const InputArea = styled.div`
  background: black;
  height: 170px;
  font-size: 30px;
  color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
`;

export const Label = styled.label``;

export const NicknameSpan = styled.div`
  text-align: start;
  width: 250px;
  height: 100%;
`;

export const NicknameInput = styled.input`
  height: 100%;
  width: 250px;
`;

export const NicknameFixIcon = styled.button`
  width: 32px;
  height: 32px;
  background-image: url(${process.env.PUBLIC_URL + '/image/userinfo/nickname_fix_icon.svg'});
  background-size: cover;
  display: inline-block;
`;

export const WinRateSpan = styled.span`
  font-size: 32px;
  padding: 9px 3px 9px 3px;
  margin: 6px;
`;

export const BeginnerIcon = styled.label`
  background-color: #4d82c1;
  color: #e4c4c4;
  font-size: 22px;
  display: inline;
  margin: 10px;
  padding: 6px 20px 6px 20px;
  border-radius: 20px;
`;

export const ImmediateIcon = styled.label`
  background-color: #e08d2a;
  color: #e4c4c4;
  font-size: 22px;
  display: inline;
  margin: 10px;
  padding: 6px 20px 6px 20px;
  border-radius: 20px;
`;

export const ExpertIcon = styled.label`
  background-color: #a34747;
  color: #e4c4c4;
  font-size: 22px;
  display: inline;
  margin: 10px;
  padding: 6px 20px 6px 20px;
  border-radius: 20px;
`;
