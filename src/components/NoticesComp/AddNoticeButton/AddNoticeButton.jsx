import { AddNoticeModal } from './AddNoticeModal/AddNoticeModal';
import { ButtonStyled, PlusIcon } from './AddNoticeButton.styled';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { useAuth } from 'hooks/useAuth';

export const AddNoticeButton = () => {
  const { isLoggedIn } = useAuth();

  const [showModalAddNotice, setShowModalAddNotice] = useState(false);

  const toggleModalAddNotice = () => {
    isLoggedIn
      ? setShowModalAddNotice(!showModalAddNotice)
      : Notiflix.Notify.warning('You must be loggined!');
  };
  return (
    <div style={{ marginLeft: 'auto', position: 'relative' }}>
      <ButtonStyled onClick={toggleModalAddNotice}>
        <div>
          <PlusIcon />
        </div>
        Add pet
      </ButtonStyled>
      {showModalAddNotice && <AddNoticeModal onClose={toggleModalAddNotice} />}
    </div>
  );
};
