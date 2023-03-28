import { PetsList } from './PetsList/PetsList';
import { useAuth } from '../../../redux/UserPage/auth/useAuth';

import {
  AddPetDiv,
  AddPetWrapper,
  PetDataInfo,
  PetDataWrapper,
} from './PetsData.styled';

export const PetsData = ({ petsList }) => {
  // let { pets } = useAuth();
  // let profile = false;
  // if (props && props.pets) {
  //   pets = props.pets;
  //   profile = true;
  // }

  // console.log(petsList);
  return (
    <>
      <AddPetWrapper>
        <AddPetDiv></AddPetDiv>

        {petsList?.length === 0 ? (
          <PetDataWrapper>
            <PetDataInfo>Unfortunately there is no one here yet.</PetDataInfo>
          </PetDataWrapper>
        ) : (
          <PetsList petsList={petsList} />
        )}
      </AddPetWrapper>
    </>
  );
};
