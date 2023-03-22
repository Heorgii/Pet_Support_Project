import { NoticesSearch } from './NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from './NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from './AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { Wrapper, WrapperNav } from './NoticesComp.styled';

export const NoticesComp = () => {
  console.log();
  return (
    <Wrapper>
      <NoticesSearch />
      <WrapperNav>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </WrapperNav>
      <NoticesCategoriesList />
      <AddNoticeButton />
    </Wrapper>
  );
};
