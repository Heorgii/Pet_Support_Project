import { useEffect, useState } from 'react';

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
        <Modal setShow={toggleModal}>
          <ModalLogout onClose={toggleModal} onCloseBtn={toggleModal} />
        </Modal>
      )}
    </>
  );
};
