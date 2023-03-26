import { NoticesSearch } from './NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from './NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from './AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { Wrapper, WrapperNav } from './NoticesComp.styled';
import { useState } from 'react';

export const NoticesComp = () => {
  const [search, setSearch] = useState('');

  return (
    <Wrapper>
      <NoticesSearch data={{ search, setSearch }} />
      <WrapperNav>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </WrapperNav>
      <NoticesCategoriesList />
    </Wrapper>
  );
};
