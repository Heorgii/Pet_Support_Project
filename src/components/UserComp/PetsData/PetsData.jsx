import { PetsList } from './PetsList/PetsList';
// import { useAuth } from 'hooks/useAuth';
import { useAuth } from '../../../redux/UserPage/auth/useAuth';

import {
  AddPetDiv,
  AddPetWrapper,
  PetDataInfo,
  PetDataWrapper,
} from './PetsData.styled';

export const PetsData = props => {
  const { pets } = useAuth();
  let profile = false;
  if (props && props.pets) {
    pets = props.pets;
    profile = true;
  }

  console.log(pets);
  return (
    <>
      <AddPetWrapper>
        {!profile && <AddPetDiv></AddPetDiv>}

        {pets.length === 0 ? (
          <PetDataWrapper>
            <PetDataInfo>Unfortunately there is no one here yet.</PetDataInfo>
          </PetDataWrapper>
        ) : (
          <PetsList pets={pets} profile={profile} />
        )}
      </AddPetWrapper>
    </>
  );
};
