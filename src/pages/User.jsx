import { useState } from 'react';//useEffect
import { PetsData } from 'components/UserComp/PetsData/PetsData';
import { UserData } from 'components/UserComp/UserData/UserData';
import { UserDataTitle } from 'components/UserComp/UserDataTitle/UserDataTitle';
import { Logout } from 'components/UserComp/Logout/Logout';
import { AddPetButton } from 'components/UserComp/PetsData/AddPetButton/AddPetButton';
import {
  TopContainer,
  UserAboutWrapper,
  UserDataContainer,
  UserDataWrapper,
  UserPageWrapper,
  MyPetTitle,
} from './UserPage.styled';
import { ModalAddsPet } from 'components/UserComp/PetsData/ModalAddsPet/ModalAddsPet';
// import { cleanModal } from 'redux/modal/operation';
import { openModalWindow } from 'hooks/modalWindow';

export const UserPage = () => {
  const [toShow] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  // useEffect(() => {
  //   if (!isModalOpen) {
  //     document.body.style.overflow = '';
  //   }
  // }, [isModalOpen]);

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
            <MyPetTitle>My pets:</MyPetTitle>
            <AddPetButton onOpenAddsPet={openModalWindow} />
          </TopContainer>
          {toShow === 'pets' && <PetsData />}
        </UserAboutWrapper>
      </UserPageWrapper>
      {isModalOpen && (
        // setShow={toggleModal}
        <cleanModal>
          <ModalAddsPet onCloseBtn={toggleModal} />
        </cleanModal>
      )}
    </>
  );
};

export default UserPage;
