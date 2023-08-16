import useModal from 'hooks/useModal';
import * as S from 'components/modal/Modal.style';
import { FiXCircle } from 'react-icons/fi';
import React from 'react';

function Modal({ children, id }) {
  const { modalToggleState, closeModal } = useModal(id);

  return (
    <>
      {modalToggleState && (
        <S.ModalBackground>
          <S.ModalBody>
            <S.ModalExitButton>
              <FiXCircle size={30} color="#d9d9d9" onClick={closeModal} cursor={'pointer'} />
            </S.ModalExitButton>
            {children}
          </S.ModalBody>
        </S.ModalBackground>
      )}
    </>
  );
}

export default React.memo(Modal);
