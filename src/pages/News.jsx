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

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const pathParams = `/news?query=${searchQuery}`;

  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      (async () => {
        setIsLoading(true);
        try {
          const { data } = await fetchData(pathParams);
          setNews(data);
          if (!data) {
            return onFetchError('Whoops, something went wrong');
          }
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }

    (async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/news');
        setNews(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [pathParams, searchQuery]);

  const handleFormSubmit = searchQuery => {
    reset();
    updateQueryString(searchQuery);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const reset = () => {
    setSearchParams('');
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

          <NewsSearch onSubmit={handleFormSubmit} />
          {news.length > 0 && !error && <NewsList news={news} />}
        </Container>
      </Section>
    </>
  );
};

export default News;
