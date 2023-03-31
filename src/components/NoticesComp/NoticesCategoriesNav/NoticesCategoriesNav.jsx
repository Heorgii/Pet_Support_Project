import { useAuth } from 'hooks/useAuth';
import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPage } from 'redux/pagination/slice';
import { paginationPage, paginationPerPage } from 'redux/pagination/selectors';
import { useParams, useSearchParams } from 'react-router-dom';

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
  const [searchParams, setSearchParams] = useSearchParams();

searchParams.set('page', 1)

  const navItemsPublick = [
    {
      href: `/notices/lost-found?${searchParams}`,
      text: 'lost/found',
    },
    {
      href: `/notices/for-free?${searchParams}`,
      text: 'for-free',
    },
    { href: `/notices/sell?${searchParams}`, text: 'sell' },
  ];
  const navItemsPrivate = [
    {
      href: `/notices/favorite?${searchParams}`,
      text: 'favorite ads',
    },
    { href: `/notices/own?${searchParams}`, text: 'my ads' },
  ];

  // useEffect(() => {
  //   const item = ref.current;
  //   item &&
  //     item.addEventListener('click', () => {
  //       dispatch(addPage(1));
  //     });
  // }, [dispatch]);

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
