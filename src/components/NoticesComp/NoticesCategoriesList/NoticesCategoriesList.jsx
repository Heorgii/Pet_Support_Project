import { NoticesCategoriesItem } from './NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotices } from '../ModalNotice/ModalNotice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { ContainerStatus } from './NoticesCategoriesList.styled';
import {
  onFetchError,
  onInfo,
  onSuccess,
} from 'components/helpers/Messages/NotifyMessages';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import { fetchData } from 'services/APIservice';
import { useDispatch, useSelector } from 'react-redux';
import { queryValue } from 'redux/query/selectors';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { addFavorite, removeFavorite } from 'services/auth';
import { selectFavorites, selectIsLoggedIn } from 'redux/auth/selectors';
import { Pagination } from 'utils/pagination';
import { addPage } from 'redux/pagination/slice';
import { addReload } from 'redux/reload/slice';
import { reloadValue } from 'redux/reload/selectors';
import { paginationPage, paginationPerPage } from 'redux/pagination/selectors';

export const NoticesCategoriesList = () => {
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const page = useSelector(paginationPage);
  const perPage = useSelector(paginationPerPage);

  function changePage(newPage) {
    dispatch(addPage(newPage));
  }

  const routeParams = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = useSelector(queryValue);
  const reload = useSelector(reloadValue);

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
    if (routeParams.id === 'favorite') {
      dispatch(addReload(true));
    }
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
    if (reload) {
      setTimeout(() => fetchNoticesList(), 200);
      dispatch(addReload(false));
    }
  }, [dispatch, itemForFetch, page, perPage, query, reload, setSearchParams]);

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
            <Title as="h3" size="20px">
              Whoops! Can't find anything...
            </Title>
          ) : (
            listItem.map(value => (
              <NoticesCategoriesItem
                data={value}
                isInFavorite={favorites ? favorites.includes(value._id) : false}
                addToFavoriteFunction={handleFavoriteBtnClick}
                key={value._id}
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
