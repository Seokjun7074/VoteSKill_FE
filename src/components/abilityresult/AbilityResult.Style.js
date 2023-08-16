import Modal, { ModalBackground, ModalBody } from 'components/modal/Modal.style';
import { styled, keyframes, css } from 'styled-components';
import { theme } from '../../styles/theme';

export const JobAssignModalBody = styled.div`
  width: 700px;
  height: 400px;
  z-index: 2;
  margin-left: 100px;
  background: red;
  border: 2px solid black;
  border-radius: 20px;
  text-align: center;
  animation: ${(props) => (props.showJobModal ? fadeIn : fadeOut)} 0.15s ease-out;
`;

export const ModalContent = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  transition: opacity 0.2s ease;
`;

export const JobImage = styled.img`
  width: 400px;
  height: 320px;
  margin-top: 10px;
  margin-left: 30px;
`;
export const JobIntroduceDiv = styled.div`
  font-size: 10px;
  margin-top: 60px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;
export const JobAssignText = styled.div`
  margin-top: 50px;
  height: 45px;
  font-size: xx-large;
  font-weight: bold;
  text-align: center;
`;
export const JobDescription = styled.div`
  font-size: 20px;
  margin-top: 60px;
`;

export const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

export const fadeOut = keyframes`
0%{
  opacity: 1;
}
100%{
  opacity: 0;
}
`;
