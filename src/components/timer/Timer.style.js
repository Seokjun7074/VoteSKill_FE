import { keyframes, styled } from 'styled-components';

export const TimerWrapper = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const rotate = keyframes` 
0%{
    transform: scale(0.9);
}
50%{ 
    transform: scale(1.0);
}
100%{
   transform: scale(1.1);
}
`;

export const IconBox = styled.div`
  width: 30px;
  height: 30px;
  animation: ${rotate} 1s linear infinite;
  color: ${({ $sec, theme }) => ($sec <= 10 ? theme.color.red : theme.color.gray)};
`;

export const TimeSpan = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: ${({ $sec, theme }) => ($sec <= 10 ? theme.color.red : theme.color.gray)};
`;
