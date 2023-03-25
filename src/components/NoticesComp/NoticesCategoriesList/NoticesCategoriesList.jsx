import { NoticesCategoriesItem } from './NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotices } from '../ModalNotice/ModalNotice';
import { ContainerStatus } from './NoticesCategoriesList.styled';

import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useState } from 'react';

export const NoticesCategoriesList = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');
  let itemForFetch = `http://petsapi.cyclic.app/api/notices/sell`;

  useEffect(() => {
    setStatus('pending');
    async function fetchNoticesList() {
      await fetch(itemForFetch)
        .then(res => {
          if (res.ok) {
            setStatus('resolved');
            return res.json();
          }
          return Promise.reject(new Error(`Can't find anything`));
        })
        .then(value => setData(value))
        .catch(error => {
          setStatus('reject');
        });
    }
    fetchNoticesList();
  }, [itemForFetch]);
  if (status === 'pending') {
    console.log('LOADING...');
  }
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
          {data.map(key => (
            <NoticesCategoriesItem data={key} key={uuidv4()} />
          ))}
        </ContainerStatus>
      </div>
      <ModalNotices />
    </>
  );
};
