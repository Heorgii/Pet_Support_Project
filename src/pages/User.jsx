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

export const UserPage = () => {
  const [petsList, setPetsList] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      const { data } = await axios('/user');
      return data.pets;
    };
    async function fetchPets() {
      const pets = await getPets();
      setPetsList(pets);
    }
    fetchPets();
  }, []);

  return (
    <div>
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
            <AddPetButton />
          </TopContainer>
          <PetsData petsList={petsList} />
        </UserAboutWrapper>
      </UserPageWrapper>
      <ModalAddsPet />
    </div>
  );
};

export default UserPage;
