import styled from 'styled-components';

export const Total = styled.div`
  width: 1080px;
  height: calc(100% - 100px);
  display: flex;
  gap: 20px;
  margin: 0 auto;
  padding: 50px;
  background-color: rgba(255, 255, 255, 0.2);
  /* background-image: url(${process.env.PUBLIC_URL}/image/waitingroom/waitingroom_background.jpg); */
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.s};
  box-shadow: 1px 1px 2px black;
`;
