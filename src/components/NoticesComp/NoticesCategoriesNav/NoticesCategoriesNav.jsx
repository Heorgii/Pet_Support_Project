import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import {
  BtnCategory,
  ContainerCategoryBtn,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  let navigate = useNavigate();

  const handleClick = href => {
    navigate(href);
  };
  return (
    <ContainerCategoryBtn>
      <BtnCategory onClick={() => handleClick('/notices/lost-found')}>
        lost/find
      </BtnCategory>
      <BtnCategory onClick={() => handleClick('/notices/for-free')}>
        in good hand
      </BtnCategory>
<<<<<<< HEAD
      <BtnCategory autoFocus={true} type="button" onClick={() => handleClick('/notices/sell')}>
=======
      <BtnCategory onClick={() => handleClick('/notices/sell')}>
>>>>>>> 3f960439b4b9143b46cf69c1df49d8577365e040
        sell
      </BtnCategory>
      {isLoggedIn && (
        <>
          <BtnCategory onClick={() => handleClick('/notices/favorite')}>
            fivorite pets
          </BtnCategory>
          <BtnCategory onClick={() => handleClick('/notices/own')}>
            {' '}
            my pet
          </BtnCategory>
        </>
      )}
    </ContainerCategoryBtn>
  );
};
