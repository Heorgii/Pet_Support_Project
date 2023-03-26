import { NewsList } from './NewsList/NewsList';
import { NewsSearch } from './NewsSearch/NewsSearch';

export const NewsComp = ({ news }) => {
  return (
    <>
      <NewsSearch />
      <NewsList news={news} />
    </>
  );
};
