import { useAuth } from 'hooks/useAuth';
import { useSelector } from 'react-redux';
import { paginationPage, paginationPerPage } from 'redux/pagination/selectors'; 

import {
  BtnCategory,
  ContainerCategoryBtn,
  StyledLi,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
const page = useSelector(paginationPage);
const perPage = useSelector(paginationPerPage);

  const navItemsPublick = [
    { href: `/notices/lost-found?perPage=${perPage}&page=${page}`, text: 'lost/find' },
    { href: `/notices/for-free?perPage=${perPage}&page=${page}`, text: 'in good hand' },
    { href: `/notices/sell?perPage=${perPage}&page=${page}`, text: 'sell' },
  ];
  const navItemsPrivate = [
    { href: `/notices/favorite?perPage=${perPage}&page=${page}`, text: 'fivorite pets' },
    { href: `/notices/own?perPage=${perPage}&page=${page}`, text: 'my pet' },
  ];

  return (
    <ContainerCategoryBtn>
      {navItemsPublick.map(({ href, text }) => (
        <StyledLi key={href}>
          <BtnCategory to={href}>{text}</BtnCategory>
        </StyledLi>
      ))}
      {isLoggedIn && (
        <>
          {navItemsPrivate.map(({ href, text }) => (
            <StyledLi key={href}>
              <BtnCategory to={href}>{text}</BtnCategory>
            </StyledLi>
          ))}
        </>
      )}
    </ContainerCategoryBtn>
  );
};
