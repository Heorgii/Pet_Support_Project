import { openModalWindow } from 'hooks/modalWindow';
import { useDispatch } from 'react-redux';
import { addModal } from 'redux/modal/operation';
import { ModalAddsPet } from '../ModalAddsPet/ModalAddsPet';
import {
  AddPetWrapper,
  AddPetDesc,
  AddPetBtn,
  PlusIcon,
} from './AddPetButton.styled';

export const AddPetButton = ({ onOpenAddsPet }) => {
  const dispatch = useDispatch();

  const toggleModalAddUserPets = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'formAddPets') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
        }),
      );
      openModalWindow(e, null);
    }
  };
  
  return (
    <AddPetWrapper>
      <AddPetDesc>Add pet</AddPetDesc>
      <AddPetBtn type="button" onClick={(e) =>{toggleModalAddUserPets(e)}} data-modal="formAddPets">
        <PlusIcon />
      </AddPetBtn>
      <ModalAddsPet />
    </AddPetWrapper>
  );
};
