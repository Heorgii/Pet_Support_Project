import { NoticesCategoriesItem } from './NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotices } from '../ModalNotice/ModalNotice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { ContainerStatus } from './NoticesCategoriesList.styled';
import {
  onFetchError,
  onInfo,
  onSuccess,
} from 'components/helpers/Messages/NotifyMessages';

import { fetchData } from 'services/APIservice';
import { useDispatch, useSelector } from 'react-redux';
import { queryValue } from 'redux/query/selectors';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { addFavorite, removeFavorite } from 'redux/auth/operations';
import { selectFavorites, selectIsLoggedIn } from 'redux/auth/selectors';
import { Pagination } from 'utils/pagination';
import { addPage } from 'redux/pagination/slice';
import { paginationPage, paginationPerPage } from 'redux/pagination/selectors';

export const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);

  const [page, setPage] = useState(1);
  function changePage(newPage) {
    dispatch(addPage((newPage)));
  }

  const routeParams = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = useSelector(queryValue);

  const itemForFetch = `/notices/${routeParams.id}?${searchParams}`;

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFavorites);

  const toggleFavorite = async id => {
    let isInFavorite = false;
    favorites
      ? (isInFavorite = favorites.includes(id))
      : (isInFavorite = false);
    if (isInFavorite) {
      dispatch(removeFavorite(id));
      onSuccess('You remove pet from the favorite!');
      return;
    }
    dispatch(addFavorite(id));
    onSuccess('You add pet to the favorite!');
  };

  const handleFavoriteBtnClick = id => e => {
    e.preventDefault();
    e.stopPropagation();
    !isLoggedIn ? onInfo('You must be loggined!') : toggleFavorite(id);
  };

  useEffect(() => {
    query !== ''
      ? setSearchParams(`findtext=${query}&perPage=${perPage}&page=${page}`)
      : setSearchParams(`perPage=${perPage}&page=${page}`);

    async function fetchNoticesList() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(itemForFetch);
        setListItem(data.data);
        setTotalPage(data.totalPage);
        setTotal(data.total);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }

    }
    fetchNoticesList();
    if (total === 0) {
      setTimeout(() => fetchNoticesList(), 500);
    }
  }, [itemForFetch, total, page, query, setSearchParams, setTotal]);  

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
          {listItem?.length === 0 ? (
            <h3>Ups Can't find anything..</h3>
          ) : (
            listItem.map(value => (
              <NoticesCategoriesItem
                data={value}
                isInFavorite={favorites ? favorites.includes(value._id) : false}
                addToFavoriteFunction={handleFavoriteBtnClick}
                key={value._id}
                setTotal={setTotal}
              />
            ))
          )}
        </ContainerStatus>
      </div>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <Pagination totalPage={totalPage} changePage={changePage} />
      <ModalNotices addToFavoriteFunction={handleFavoriteBtnClick} />
    </>
  );
};
