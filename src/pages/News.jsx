import { useState, useEffect } from 'react';
import { SEO } from 'utils/SEO';
import {
  Container,
  Section,
  Title,
} from 'components/baseStyles/CommonStyle.styled';
import { NewsComp } from '../components/NewsComp/NewsComp';
import { fetchData } from '../services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';

const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <SEO
        title="Our friends"
        description="You can see all of our company of friends"
      />
      <Section>
        <Container>
          <Title as="h1">Our Friends</Title>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          {news.length > 0 && !error && <NewsComp news={news} />}
        </Container>
      </Section>
    </>
  );
};

export default News;
