import { NoticesSearch } from './NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from './NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from './AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { WrapperNav } from './NoticesComp.styled';
import { useState } from 'react';
import { Title } from 'components/baseStyles/CommonStyle.styled';

export const NoticesComp = () => {
  const [total, setTotal] = useState(0);

  return (
    <>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <WrapperNav>
        <NoticesCategoriesNav />
        <AddNoticeButton setTotal={setTotal} />
      </WrapperNav>
      <NoticesCategoriesList total={total} setTotal={setTotal} />
    </>
  );
};
