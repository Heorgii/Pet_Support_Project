import { useEffect, useState } from 'react';
import { LogoutBtn, LogoutBtnText, LogoutIconStyled } from './Logout.styled';
import { ModalLogout } from './ModalLogout/ModalLogout';
import { cleanModal } from 'redux/modal/operation';
export const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <>
      <LogoutBtn onClick={toggleModal}>
        <LogoutIconStyled />
        <LogoutBtnText>Log Out</LogoutBtnText>
      </LogoutBtn>

      {isModalOpen && (
        <cleanModal setShow={toggleModal}>
          <ModalLogout onClose={toggleModal} onCloseBtn={toggleModal} />
        </cleanModal>
      )}
    </>
  );
};
