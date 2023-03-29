import { useDispatch } from 'react-redux';
import authOperations from '../../../../../redux/UserPage/auth/authOperations';
import {
  DeleteIcon,
  PetsItemDeleteBtn,
  PetsItemDesc,
  PetsItemImg,
  PetsItemInfoBlock,
  PetsItemSpan,
  PetsItemWrapper,
} from './PetsItem.styled';

export const PetsItem = ({ pet, profile, removePetList }) => {
  const dispatch = useDispatch();
  const { name, _id, date, breed, imageUrl, comments } = pet;

  return (
    <>
      <PetsItemWrapper>
        <PetsItemImg src={imageUrl} alt={name} />
        <PetsItemInfoBlock>
          {!profile && (
            <PetsItemDeleteBtn
              type="submit"
              onClick={() => {
                dispatch(authOperations.removePet(_id));
                removePetList(_id);
              }}
            >
              <DeleteIcon />
            </PetsItemDeleteBtn>
          )}
          <PetsItemDesc>
            <PetsItemSpan>Name:</PetsItemSpan>
            {name}
          </PetsItemDesc>
          <PetsItemDesc>
            <PetsItemSpan>Date of birth:</PetsItemSpan>
            {new Date(date).toLocaleDateString()}
          </PetsItemDesc>
          <PetsItemDesc>
            <PetsItemSpan>Breed:</PetsItemSpan>
            {breed}
          </PetsItemDesc>
          <PetsItemDesc>
            <PetsItemSpan>Comments:</PetsItemSpan>
            {comments}
          </PetsItemDesc>
        </PetsItemInfoBlock>
      </PetsItemWrapper>
    </>
  );
};
