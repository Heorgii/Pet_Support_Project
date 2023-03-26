import { NoticesCategoriesItem } from './NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotices } from '../ModalNotice/ModalNotice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { ContainerStatus } from './NoticesCategoriesList.styled';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { v4 as uuidv4 } from 'uuid';

import { useSelector } from 'react-redux';
import { queryValue } from 'redux/query/selectors';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const NoticesCategoriesList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const routeParams = useParams();

  const query = useSelector(queryValue);
  const { BASE_URL } = window.global;
  let itemForFetch = `${BASE_URL}/notices/${routeParams.id}${
    query && '?findtext=' + query
  }`;

  useEffect(() => {
    async function fetchNoticesList() {
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
    fetchNoticesList();
  }, [itemForFetch]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ContainerStatus>
          {data.length === 0 ? (
            <h3>Ups Can't find anything..</h3>
          ) : (
            data.map(key => <NoticesCategoriesItem data={key} key={uuidv4()} />)
          )}
        </ContainerStatus>
      </div>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <ModalNotices />
    </>
  );
};
