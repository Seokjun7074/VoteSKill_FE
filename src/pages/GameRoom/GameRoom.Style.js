import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: calc(100% - 70px);
`;

export const TimeHeader = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => (props.layout.Day ? 'black' : 'white')};
`;

export const TimeIcon = styled.img`
  width: 30px;
  height: 30px;
  display: inline;
`;

export const LeftTime = styled.div`
  display: inline;
`;

export const DayText = styled.div`
  margin-top: 10px;
`;
