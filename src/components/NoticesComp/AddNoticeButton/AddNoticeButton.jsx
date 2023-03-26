import { AddNoticeModal } from './AddNoticeModal/AddNoticeModal';
import { ButtonStyled, PlusIcon } from './AddNoticeButton.styled';
import { useDispatch } from 'react-redux';
import { addModal } from 'redux/modal/operation';
import { openModalWindow } from 'hooks/modalWindow';
import { onInfo } from 'components/helpers/Messages/NotifyMessages';
// import Notiflix from 'notiflix';
// import { useAuth } from 'hooks/useAuth';

export const AddNoticeButton = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedIn = true;
  const dispatch = useDispatch();

  const toggleModalAddNotice = e => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedIn) {
      onInfo('You must be loggined!');
    }
    if (isLoggedIn && e.currentTarget.dataset.modal === 'formSell') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
        }),
      );
      openModalWindow(e, null);
    }
  };

  return (
    <div style={{ marginLeft: 'auto', position: 'relative' }}>
      <ButtonStyled onClick={toggleModalAddNotice} data-modal="formSell">
        <div>
          <PlusIcon />
        </div>
        Add pet
      </ButtonStyled>
      {isLoggedIn && <AddNoticeModal />}
    </div>
  );
};
