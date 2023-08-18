import styled from 'styled-components';

export const ScreenWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: calc(100% - 70px);
`;
export const RoleSpan = styled.div`
  font-size: 18px;
  padding: 5px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.gray};
`;
