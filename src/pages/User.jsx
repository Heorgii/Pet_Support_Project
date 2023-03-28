import { useState } from 'react';
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

export const UserPage = () => {
  const [toShow] = useState();

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
            <AddPetButton />
          </TopContainer>
          {toShow === 'pets' && <PetsData />}
        </UserAboutWrapper>
      </UserPageWrapper>
    </>
  );
};

export default UserPage;
