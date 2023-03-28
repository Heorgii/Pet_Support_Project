import { NoticesCategoriesItem } from './NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotices } from '../ModalNotice/ModalNotice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { ContainerStatus } from './NoticesCategoriesList.styled';
import {
  onFetchError,
  onInfo,
  onSuccess,
} from 'components/helpers/Messages/NotifyMessages';
import { useAuth } from 'redux/UserPage/auth/useAuth';
import { fetchData } from 'services/APIservice';
import { useDispatch, useSelector } from 'react-redux';
import { queryValue } from 'redux/query/selectors';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { addFavorite } from 'redux/UserPage/auth/auth';

export const NoticesCategoriesList = () => {
  const { isLoggedIn, favorites } = useAuth(); // user, isRefreshing,
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const routeParams = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  const query = useSelector(queryValue);
  const dispatch = useDispatch();

  const itemForFetch = `/notices/${routeParams.id}?${searchParams}`;

  const toggleFavorite = async id => {
    dispatch(addFavorite(id));
    console.log(favorites);
    onSuccess('You add pet to the favorite!');
  };

  const handleFavoriteBtnClick = id => e => {
    e.preventDefault();
    e.stopPropagation();
    !isLoggedIn ? onInfo('You must be loggined!') : toggleFavorite(id);
  };

  useEffect(() => {
    query !== '' ? setSearchParams(`findtext=${query}`) : setSearchParams('');

    (async function fetchNoticesList() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(itemForFetch);
        setData(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [itemForFetch, query, routeParams.id, setSearchParams]);

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
            data.map(value => (
              <NoticesCategoriesItem
                data={value}
                addToFavoriteFunction={handleFavoriteBtnClick}
                key={value._id}
              />
            ))
          )}
        </ContainerStatus>
      </div>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <ModalNotices addToFavoriteFunction={handleFavoriteBtnClick} />
    </>
  );
};
