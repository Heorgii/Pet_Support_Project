import { NoticesSearch } from './NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from './NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from './AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { openModalWindow } from '../../hooks/modalWindow';
import { Wrapper } from './NoticesComp.styled';

export const NoticesComp = () => {
  console.log();
  return (
    <Wrapper>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      <button type="button" onClick={e => openModalWindow(e, null)}>
        modal window
      </button>
      <AddNoticeButton />
    </Wrapper>
  );
};
