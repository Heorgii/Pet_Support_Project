import { useAuth } from 'hooks/useAuth';

import {
  BtnCategory,
  ContainerCategoryBtn,
  StyledLi,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();

  const navItemsPublick = [
    { href: '/notices/lost-found', text: 'lost/find' },
    { href: '/notices/for-free', text: 'in good hand' },
    { href: '/notices/sell', text: 'sell' },
  ];
  const navItemsPrivate = [
    { href: '/notices/favorite', text: 'fivorite pets' },
    { href: '/notices/own', text: 'my pet' },
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
