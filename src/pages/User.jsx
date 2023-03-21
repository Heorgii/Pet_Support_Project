import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PetsData } from 'components/UserComp/PetsData/PetsData';
import { UserData } from 'components/UserComp/UserData/UserData';
import { UserDataTitle } from 'components/UserComp/UserDataTitle/UserDataTitle';
import { useAuth } from 'hooks/useAuth';
import { Logout } from 'components/UserComp/Logout/Logout';
import {
  TopContainer,
  UserAboutWrapper,
  UserDataContainer,
  UserDataWrapper,
  UserPageWrapper,
  MyPetContainer,
  MyPetTitle,
} from './UserPage.styled';

export const UserPage = () => {
  //   const dispatch = useDispatch();
  // const { user } = useAuth();
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
            {/* {toShow === 'pets' && <AddPetButton onOpenAddsPet={toggleModal} />} */}
          </TopContainer>
          {/* {toShow === 'pets' && <PetsData />} */}
        </UserAboutWrapper>
      </UserPageWrapper>
      {/* {isModalOpen && (
        <Modal setShow={toggleModal}>
          <ModalAddsPet onClose={toggleModal} onCloseBtn={toggleModal} />
        </Modal>
      )} */}
    </>
  );
};

export default UserPage;
