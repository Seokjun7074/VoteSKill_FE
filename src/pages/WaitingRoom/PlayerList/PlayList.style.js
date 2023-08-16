import { styled, keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;
export const PlayerListWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Square = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 20px;
`;

export const Container = styled.div`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  border-radius: 10px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

export const ButtonSquare = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
`;

export const OutButton = styled.button`
  height: 64px;
  background: white;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;
  font-size: 50px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  text-align: center;
  text-rendering: geometricprecision;
  touch-action: manipulation;
  vertical-align: middle;
  &:hover,
  &:active {
    background: #ff4742;
    color: #050801;
    box-shadow:
      0 0 5px #ff4742,
      0 0 25px #ff4742,
      0 0 50px #ff4742,
      0 0 100px #ff4742;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  &:active {
    opacity: 0.5;
  }
`;

export const StartButton = styled(OutButton)`
  background: #ff4742;
  color: #ffffff;
  &:hover,
  &:active {
    background: #03e9f4;
    color: #050801;
    box-shadow:
      0 0 5px #03e9f4,
      0 0 25px #03e9f4,
      0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Logo = styled.img`
  height: 20px;
`;
