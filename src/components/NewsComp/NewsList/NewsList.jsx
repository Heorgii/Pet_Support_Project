import { NewsListItem } from './NewsListItem/NewsListItem';
import { List } from './NewsList.styled';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useState } from 'react';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';

export const NewsList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  let itemForFetch = 'https://petsapi.cyclic.app/api/news';

  useEffect(() => {
    async function fetchNewsList() {
      setIsLoading(true);
      await fetch(itemForFetch)
        .then(res => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Can't find anything`));
        })
        .then(value => setData(value))
        .catch(error => {
          setError(error);
        });
    }
    fetchNewsList();
  }, [itemForFetch]);
  return (
    <List>
      {data.map(key=> (
        <NewsListItem data={key} key={uuidv4()} />
      ))}
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
    </List>
  );
};
