import { useEffect, useState } from 'react'; //useEffect
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
import { openModalWindow } from 'hooks/modalWindow';

export const UserPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [petsList, setPetsList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  const getPets = async () => {
    setIsLoading(true);
    const { data } = await axios('/user');
    // console.log('test', data.pets);
    setIsLoading(false);
    return data.pets;
  };

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
    }
  }, [isModalOpen]);

  useEffect(() => {
    async function fetchPets() {
      if (isLoading) return;
      const pets = await getPets();
      setPetsList(pets);
      console.log('test fn', pets);
    }
    fetchPets();
  }, []);

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
            <AddPetButton onOpenAddsPet={openModalWindow} />
          </TopContainer>
          <PetsData petsList={petsList} />
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
