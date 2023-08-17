import { useState } from 'react';
import * as S from 'pages/Lobby/RoomList/RoomList.Style';
import { useRecoilValue } from 'recoil';
import { roomListState } from 'recoil/atoms/lobbyState';
import useModal from 'hooks/useModal';
import Modal from 'components/modal/Modal';
import PasswordModal from 'components/passwordmodal/PasswordModal';
import { useNavigate } from 'react-router';

function RoomList() {
  const roomList = useRecoilValue(roomListState);
  const navigate = useNavigate();
  const { openModal } = useModal('PasswordModal');
  const [item, setItem] = useState('');

  const handleItemClick = (item) => {
    const roomPassword = item.password;
    const sessionId = item.name;

    setItem(item);
    if (roomPassword === '') {
      enterWaitingRoom(sessionId);
    } else {
      openModal();
    }
  };

  const enterWaitingRoom = (sessionId) => {
    navigate(`/play/${sessionId}`, {
      state: {
        password: '',
      },
    });
  };

  console.log(roomList);

  return (
    <>
      <S.RoomSquare>
        {roomList &&
          roomList.map((item) => (
            <S.RoomContainer
              key={item.name}
              onClick={() => {
                handleItemClick(item);
              }}
            >
              {item.name}
              <S.People style={{ textAlign: 'center' }}>
                {new Set(item.people).size}/6{' '}
                {item.password && <S.Logo src={process.env.PUBLIC_URL + '/image/lock_logo.png'} />}
              </S.People>
            </S.RoomContainer>
          ))}
      </S.RoomSquare>
      <Modal id="PasswordModal">
        <PasswordModal item={item} />
      </Modal>
    </>
  );
}

export default RoomList;
