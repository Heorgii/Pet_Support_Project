import { PetsList } from './PetsList/PetsList';

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
