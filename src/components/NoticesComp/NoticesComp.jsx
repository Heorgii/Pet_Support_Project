import { NoticesSearch } from './NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from './NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from './AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { Wrapper, WrapperNav } from './NoticesComp.styled';
import { openModalWindow } from '../../hooks/modalWindow';

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

      <button type="button" onClick={e => openModalWindow(e, null)}>
        modal window
      </button>
      <AddNoticeButton />

    </Wrapper>
  );
};
