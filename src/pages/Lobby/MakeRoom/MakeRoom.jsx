import { useEffect } from 'react';
import * as S from 'pages/Lobby/MakeRoom/MakeRoom.Style';
import useModal from 'hooks/useModal';
import MakeRoomModal from 'components/makeroommodal/MakeRoomModal';
import Modal from 'components/modal/Modal';

function MakeRoom() {
  const { openModal, closeModal } = useModal('MakeRoomModal');

  useEffect(() => {
    return () => closeModal();
  }, []);

  return (
    <S.Bottom>
      <S.MakeRoomButton onClick={openModal}>방만들기 </S.MakeRoomButton>
      <Modal id="MakeRoomModal">
        <MakeRoomModal />
      </Modal>
    </S.Bottom>
  );
}

export default MakeRoom;
