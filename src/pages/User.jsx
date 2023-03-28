import { useEffect, useState } from 'react';
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
import axios from 'axios';
// import { async } from 'q';
// import { cleanModal } from 'redux/modal/operation';

export const UserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [petsList, setPetsList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  const getPets = async () => {
    const pets = await axios('/user');
    setIsLoading(true);
    return pets;
  };

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (isLoading) return;
    setPetsList(() => getPets());
  }, [isLoading]);

  console.log('Users PetsList', petsList);

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
            <AddPetButton onOpenAddsPet={toggleModal} />
          </TopContainer>
          <PetsData petsList={petsList} />
        </UserAboutWrapper>
      </UserPageWrapper>
      {isModalOpen && (
        <cleanModal setShow={toggleModal}>
          <ModalAddsPet onClose={toggleModal} onCloseBtn={toggleModal} />
        </cleanModal>
      )}
    </>
  );
};

export default UserPage;
