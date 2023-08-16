// import Modal from 'components/modal/Modal';
import * as S from 'components/passwordmodal/PasswordModal.Style';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function PasswordModal({ item }) {
  return (
    <S.RoomMakeBackground>
      <PasswordInput item={item}></PasswordInput>
    </S.RoomMakeBackground>
  );
}

function PasswordInput({ item }) {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // 방 비번 입력
  const enterRoom = (sessionId) => {
    navigate(`/play/${sessionId}`, {
      state: {
        password,
      },
    });
  };

  const savePassword = (item) => {
    setPassword(item.target.value);
  };

  const checkPassword = () => {
    if (item.password === password) {
      enterRoom(item.name);
    } else {
      alert('비밀번호가 틀렸습니다.');
      setPassword('');
    }
  };

  return (
    <div>
      <S.PasswordText>비밀번호</S.PasswordText>
      <S.SubmitInput type="password" onChange={savePassword} />
      <br />
      <S.SubmitButton onClick={checkPassword}>입력</S.SubmitButton>
    </div>
  );
}

export default PasswordModal;
