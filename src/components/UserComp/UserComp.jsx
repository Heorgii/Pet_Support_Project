import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PetData } from './PetsData/PetsData';
import { UserData } from './UserData/UserData';

export const UserComp = () => {
  //   const dispatch = useDispatch();
  const { user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  //   useEffect(() => {
  //     dispatch();
  //   }, [dispatch]);

  return (
    <>
      <UserPageWrapper>
        <UserDataWrapper>
          <UserDataTitle title="My information:" />
          <UserDataContainer>
            <UserData />
            <Logout />
          </UserDataContainer>
        </UserDataWrapper>
        <UserAboutWrapper>
          <TopContainer>
            <MyPetContainer>
              <MyPetTitle title="My pets" />
            </MyPetContainer>
            {toShow === 'pets' && <AddPetButton onOpenAddsPet={toggleModal} />}
          </TopContainer>
          {toShow === 'pets' && <PetsData />}
        </UserAboutWrapper>
      </UserPageWrapper>
      {isModalOpen && (
        <Modal setShow={toggleModal}>
          <ModalAddsPet onClose={toggleModal} onCloseBtn={toggleModal} />
        </Modal>
      )}
    </>
  );
};
