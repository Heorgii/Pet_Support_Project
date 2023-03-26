import { closeModalWindow } from 'hooks/modalWindow';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import ReactDOM from 'react-dom';
import { BackDrop, UserPetContainerItem } from './ModalAddsPet.styled';

export const ModalAddsPet = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);

  const closeModalForItemPet = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  const [, setData] = useState([]); //data
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(isLoading, error);

  const { BASE_URL } = window.global;
  let itemForFetch = `${BASE_URL}/notices/byid/${modal.id}`;

  useEffect(() => {
    setIsLoading(true);
    async function fetchNoticesList() {
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
    if (modal.id !== null) {
      fetchNoticesList();
    }
  }, [itemForFetch, modal.id]);

  return ReactDOM.createPortal(
    Object.values(modal)[0] === 'itemPet' && (
      <BackDrop onClick={closeModalForItemPet}>
        <UserPetContainerItem></UserPetContainerItem>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};
