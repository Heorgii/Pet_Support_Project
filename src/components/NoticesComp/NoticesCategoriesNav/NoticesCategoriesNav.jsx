import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import {
  BtnCategory,
  ContainerCategoryBtn,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  let navigate = useNavigate();

  function handleClick(href) {
    console.log('click');
    navigate(href);
  }
  return (
    <ContainerCategoryBtn>
      <BtnCategory
        type="button"
        onClick={() => handleClick('/notices/lost-found')}
      >
        lost/find
      </BtnCategory>
      <BtnCategory
        type="button"
        onClick={() => handleClick('/notices/for-free')}
      >
        in good hand
      </BtnCategory>
      <BtnCategory type="button" onClick={() => handleClick('/notices/sell')}>
        sell
      </BtnCategory>
      {isLoggedIn && (
        <>
          <BtnCategory
            type="button"
            onClick={() => handleClick('/notices/favorite')}
          >
            fivorite pets
          </BtnCategory>
          <BtnCategory
            type="button"
            onClick={() => handleClick('/notices/own')}
          >
            my pet
          </BtnCategory>
        </>
      )}
    </ContainerCategoryBtn>
  );
};
