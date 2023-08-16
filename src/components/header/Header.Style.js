import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  background-color: transparent;
  /* background-image: linear-gradient(to top, #242424 50%, #5c5c5c5c 100%); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
`;
export const Logo = styled.img`
  height: 90%;
`;

export const HeaderButtonList = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
`;
