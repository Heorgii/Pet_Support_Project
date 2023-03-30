import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from 'utils/SEO';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import { NewsList } from 'components/NewsComp/NewsList/NewsList';
import { NewsSearch } from 'components/NewsComp/NewsSearch/NewsSearch';
import { fetchData } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { Pagination } from 'utils/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { queryValue } from 'redux/query/selectors';
import { addPage } from 'redux/pagination/slice';
import { paginationPage, paginationPerPage } from 'redux/pagination/selectors';

const News = () => {
  const dispatch = useDispatch();

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [totalPage, setTotalPage] = useState(0);
  const page = useSelector(paginationPage);
  const perPage = useSelector(paginationPerPage);

  function changePage(newPage) {
    dispatch(addPage((newPage)));
  }

  const [searchParams, setSearchParams] = useSearchParams(`perPage=${perPage}&page=${page}`);
  const search = useSelector(queryValue);

  useEffect(() => {
    setSearchParams(
      search.trim() !== ''
        ? `search=${search}&perPage=${perPage}&page=${page}`
        : `perPage=${perPage}&page=${page}`,
    );

    (async () => {
      try {
        const { data } = await fetchData(`/news?${searchParams}`);
        setNews(data.data);
        setTotalPage(data.totalPage);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, perPage, search, searchParams, setSearchParams]);

  return (
    <>
      <SEO title="News" description="You can see all news" />
      <Section>
        <Container>
          <Title as="h1">News</Title>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}

          <NewsSearch />
          {!news && !isLoading && (
            <Title as="h3" size="14px">
              Whoops! Can't find anything...
            </Title>
          )}
          {news?.length > 0 && !error && (
            <>
              <NewsList news={news} />
              <Pagination totalPage={totalPage} changePage={changePage} />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default News;
