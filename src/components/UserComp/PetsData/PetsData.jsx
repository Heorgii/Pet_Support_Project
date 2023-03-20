import { PetList } from './PetsList/PetsList';
import { useAuth } from 'hooks/useAuth';

export const PetData = props => {
  let { pets } = useAuth();
  let profile = false;
  if (props.pets) {
    pets = props.pets;
    profile = true;
  }

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
