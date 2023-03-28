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

export const PetsItem = ({ pet, profile }) => {
  const dispatch = useDispatch();
  const { name, _id, date, breed, imageUrl, comments } = pet;

  return (
    <>
      <PetsItemWrapper>
        <PetsItemImg src={imageUrl} alt={name} />
        <PetsItemInfoBlock>
          <PetsItemDesc>
            <PetsItemSpan>Name:</PetsItemSpan>
            {name}
          </PetsItemDesc>
          <PetsItemDesc>
            <PetsItemSpan>Date of birth:</PetsItemSpan>
            {date}
          </PetsItemDesc>
          <PetsItemDesc>
            <PetsItemSpan>Breed:</PetsItemSpan>
            {breed}
          </PetsItemDesc>
          <PetsItemDesc>
            <PetsItemSpan>Comments:</PetsItemSpan>
            {comments}
          </PetsItemDesc>
          {!profile && (
            <PetsItemDeleteBtn
              type="submit"
              onClick={() => dispatch(authOperations.removePet(_id))}
            >
              <DeleteIcon />
            </PetsItemDeleteBtn>
          )}
        </PetsItemInfoBlock>
      </PetsItemWrapper>
    </>
  );
};
