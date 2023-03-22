import { useSelector } from 'react-redux';
import { selectIsStateChange } from 'redux/auth/selectors';
import {
  BtnCategory,
  ContainerCategoryBtn,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const isLogin = useSelector(selectIsStateChange);

  return (
    <ContainerCategoryBtn>
      <BtnCategory>lost/find</BtnCategory>
      <BtnCategory>in good hand</BtnCategory>
      <BtnCategory>sell</BtnCategory>
      {isLogin && (
        <>
          <BtnCategory>fivorite pets</BtnCategory>
          <BtnCategory>my pet</BtnCategory>
        </>
      )}
    </ContainerCategoryBtn>
  );
};
