import { styled } from 'styled-components';

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalBody = styled.div`
  text-align: center;
  min-width: 700px;
  /* max-width: 1064px; */
  min-height: 400px;
  /* max-height: 618px; */
  border-radius: ${(props) => props.theme.borderRadius.s};
  overflow: hidden;
  position: relative;
  z-index: 100;
`;

export const ModalExitButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  /* z-index: 101; */
`;
