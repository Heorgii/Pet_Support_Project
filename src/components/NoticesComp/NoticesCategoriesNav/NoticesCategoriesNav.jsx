import { useAuth } from 'hooks/useAuth';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPage } from 'redux/pagination/slice';
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
  const dispatch = useDispatch();
  const ref = useRef(null);

  const navItemsPublick = [
    {
      href: `/notices/lost-found?perPage=${perPage}&page=${page}`,
      text: 'lost/found',
    },
    {
      href: `/notices/for-free?perPage=${perPage}&page=${page}`,
      text: 'for-free',
    },
    { href: `/notices/sell?perPage=${perPage}&page=${page}`, text: 'sell' },
  ];
  const navItemsPrivate = [
    {
      href: `/notices/favorite?perPage=${perPage}&page=${page}`,
      text: 'fivorite pets',
    },
    { href: `/notices/own?perPage=${perPage}&page=${page}`, text: 'my pet' },
  ];

  useEffect(() => {
    const item = ref.current;
    item &&
      item.addEventListener('click', () => {
        dispatch(addPage(1));
      });
  }, [dispatch]);

  return (
    <ContainerCategoryBtn ref={ref}>
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
