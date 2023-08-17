// import Modal from 'components/modal/Modal';
import * as S from 'components/passwordmodal/PasswordModal.Style';
import useInput from 'hooks/useInput';
import { useNavigate } from 'react-router';
import showSwal from 'utils/showSwal';

function PasswordModal({ item }) {
  return (
    <S.RoomMakeBackground>
      <PasswordInput item={item}></PasswordInput>
    </S.RoomMakeBackground>
  );
}

function PasswordInput({ item }) {
  const [password, setPassword, passwordHandler] = useInput('');
  const navigate = useNavigate();

  const enterRoom = (sessionId) => {
    navigate(`/play/${sessionId}`, {
      state: {
        password,
      },
    });
  };

  const checkPassword = () => {
    if (item.password === password) {
      enterRoom(item.name);
    } else {
      showSwal('비밀번호가 틀렸습니다.', '확인');
      setPassword('');
    }
  };

  return (
    <S.RoomMakeBackground>
      <S.PasswordText>비밀번호</S.PasswordText>
      <S.SubmitInput type="password" onChange={passwordHandler} />
      <S.SubmitButton onClick={checkPassword}>입력</S.SubmitButton>
    </S.RoomMakeBackground>
  );
}

export default PasswordModal;
