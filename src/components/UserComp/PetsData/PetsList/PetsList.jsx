import { PetsItem } from './PetsItem/PetsItem';
import { PetsListWrapper } from './PetsList.styled';

export const PetsList = ({ pets, profile }) => {
  return (
    <>
      {pets.length > 0 && (
        <PetsListWrapper>
          {pets.map(pet => (
            <PetsItem key={pet._id} pet={pet} profile={profile} />
          ))}
        </PetsListWrapper>
      )}
    </>
  );
};
