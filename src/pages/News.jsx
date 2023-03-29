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
import { fetchData } from '../services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { Pagination } from 'utils/paginate';

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [total, setTotal] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const perPage = 2;

  function changePage(newPage) {
    setPage(newPage);
  }

  const [search, setSearch] = useState('');
  const handleFormSubmit = searchQuery => {
    setPage(Number(1));
    setSearch(searchQuery);
  };
  useEffect(() => {
    setSearchParams(
      search.trim() !== ''
        ? `search=${search}&perPage=${perPage}&page=${page}`
        : `perPage=${perPage}&page=${page}`,
    );

    (async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/news?${searchParams}`);
        setNews(data.data);
        setTotal(data.total);
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
  }, [page, search, searchParams, setSearchParams]);

  const reset = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <>
      <SEO title="News" description="You can see all news" />
      <Section>
        <Container>
          <Title as="h1">News</Title>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}

          <NewsSearch sendSearch={handleFormSubmit} reset={reset} />
          {!news &&
            !isLoading && ( //&& news.length === 0
              <Title as="h3" size="14px">
                Whoops! Can't find anything...
              </Title>
            )}
          {news.length > 0 && !error && (
            <>
              <NewsList news={news} />
              <Pagination
                perPage={perPage}
                total={total}
                totalPage={totalPage}
                changePage={changePage}
              />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};

export default News;
