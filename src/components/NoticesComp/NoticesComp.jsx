import { NoticesSearch } from './NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from './NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from './AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { Wrapper } from './NoticesComp.styled';
import { useDispatch } from 'react-redux';
import { fetchNoticesByCategory } from 'redux/notices/operations';

export const NoticesComp = () => {
  console.log();
  return (
    <Wrapper>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      <AddNoticeButton />
    </Wrapper>
  );
};
