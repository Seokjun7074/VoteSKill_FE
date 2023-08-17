import { styled } from 'styled-components';

export const RoomMakeBackground = styled.div`
  background-color: ${({ theme }) => theme.color.darkgray};
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius.s};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 20px 0;
`;

export const PasswordText = styled.h3`
  color: ${({ theme }) => theme.color.lightgray};
  font-size: 30px;
`;

export const SubmitInput = styled.input`
  background-color: ${({ theme }) => theme.color.lightgray};
  padding: 5px;
  color: ${({ theme }) => theme.color.darkgray};
  width: 200px;
  text-align: center;
  border-radius: 5px;
  font-size: 20px;
`;
export const SubmitButton = styled.button`
  padding: 5px;
  background-color: ${({ theme }) => theme.color.lightgray};
  color: ${({ theme }) => theme.color.darkgray};
  width: 100px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
`;
