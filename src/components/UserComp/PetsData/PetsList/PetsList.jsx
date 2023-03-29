import { PetsItem } from './PetsItem/PetsItem';
import { PetsListWrapper } from './PetsList.styled';

export const PetsList = ({ petsList, removePetList }) => {

  // const [petsList, setPetsList] = useState([]);

  // const removePetList = _id => {
  //   setPetsList(petsList.filter(pet => pet._id !== payload._id));
  // };

  return (
    <>
      {petsList?.length > 0 && (
        <PetsListWrapper>
          {petsList.map(pet => (
            <PetsItem removePetList={removePetList} key={pet._id} pet={pet} />
          ))}
        </PetsListWrapper>
      )}
    </>
  );
};
