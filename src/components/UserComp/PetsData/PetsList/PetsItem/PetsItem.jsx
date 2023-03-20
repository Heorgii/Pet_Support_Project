import { useEffect, useState } from 'react';

export const PetsItem = ({ pet, profile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  const { _id, name, birthday, breed, photoUrl, comments } = pet;

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  return (
    <>
      <PetsItemWrapper>
        <PetsItemImg src={photoUrl} alt={name} />
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
            {birthday}
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

      {isModalOpen && (
        <Modal setShow={toggleModal}>
          <ModalConfirmDelete
            _id={_id}
            onClose={toggleModal}
            onCloseBtn={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};
