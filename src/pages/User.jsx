import { useEffect, useState } from 'react';
import axios from 'axios';
import { SEO } from 'utils/SEO';
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
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const UserPage = () => {
  const [petsList, setPetsList] = useState([]);

  const removePetList = async _id => {
    try {
      const result = await axios.delete(`/pets/${_id}`);
      setPetsList(petsList.filter(pet => pet._id !== _id));
      return { result, _id };
    } catch ({ response }) {
      console.log(response);
      // return thunkAPI.rejectWithValue(response.data.message);
    }
  };

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
    <>
      <SEO
        title="User"
        description="Your account. You can add your pets or edit your information"
      />
      <Section>
        <Container>
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
              <PetsData petsList={petsList} removePetList={removePetList} />
            </UserAboutWrapper>
          </UserPageWrapper>
        </Container>
      </Section>
    </>
  );
};

export default UserPage;
