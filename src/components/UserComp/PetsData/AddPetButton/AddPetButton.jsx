import {
  AddPetWrapper,
  AddPetDesc,
  AddPetBtn,
  PlusIcon,
} from './AddPetButton.styled';

export const AddPetButton = ({ onOpenAddsPet }) => {
  return (
    <AddPetWrapper>
      <AddPetDesc>Add pet</AddPetDesc>
      <AddPetBtn type="button" onClick={onOpenAddsPet}>
        <PlusIcon />
      </AddPetBtn>
    </AddPetWrapper>
  );
};
