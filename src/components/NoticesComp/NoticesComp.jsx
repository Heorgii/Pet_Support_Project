import { NoticesSearch } from './NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from './NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from './AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { Container, Section } from '../baseStyles/CommonStyle.styled';
import { TitleNotice } from './NoticesComp.styled';

export const NoticesComp = () => {
  return (
    <Container>
      <Section>
        <TitleNotice>Find your favorite pet</TitleNotice>
        <NoticesSearch />
        <NoticesCategoriesNav />
        <NoticesCategoriesList />
        <AddNoticeButton />
      </Section>
    </Container>
  );
};
