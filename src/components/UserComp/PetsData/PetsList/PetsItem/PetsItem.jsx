import { useEffect, useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  const { name, date, breed, imageUrl, comments } = pet;

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <>
      <PetsItemWrapper>
        <PetsItemImg src={imageUrl} alt={name} />
        <PetsItemInfoBlock>
          {!profile && (
            <PetsItemDeleteBtn type="button" onClick={toggleModal}>
              <DeleteIcon />
            </PetsItemDeleteBtn>
          )}
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
        </PetsItemInfoBlock>
      </PetsItemWrapper>
    </>
  );
};
