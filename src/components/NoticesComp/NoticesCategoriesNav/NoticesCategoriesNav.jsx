import { useAuth } from 'hooks/useAuth';
import {
  BtnCategory,
  ContainerCategoryBtn,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();


  return (
    <ContainerCategoryBtn>
      <BtnCategory>lost/find</BtnCategory>
      <BtnCategory>in good hand</BtnCategory>
      <BtnCategory>sell</BtnCategory>
      {isLoggedIn && (
        <>
          <BtnCategory>fivorite pets</BtnCategory>
          <BtnCategory>my pet</BtnCategory>
        </>
      )}
    </ContainerCategoryBtn>
  );
};
