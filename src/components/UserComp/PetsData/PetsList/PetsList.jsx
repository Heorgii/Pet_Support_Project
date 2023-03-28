import { PetsItem } from './PetsItem/PetsItem';
import { PetsListWrapper } from './PetsList.styled';

export const PetsList = ({ petsList }) => {
  return (
    <>
      {petsList.length > 0 && (
        <PetsListWrapper>
          {petsList.map(pet => (
            <PetsItem key={pet._id} pet={pet} />
          ))}
        </PetsListWrapper>
      )}
    </>
  );
};
