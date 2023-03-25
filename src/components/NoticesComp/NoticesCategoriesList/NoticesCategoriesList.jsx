import { NoticesCategoriesItem } from './NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotices } from '../ModalNotice/ModalNotice';
import { ContainerStatus } from './NoticesCategoriesList.styled';

import data from './pets.json';
import { v4 as uuidv4 } from 'uuid';

export const NoticesCategoriesList = () => {
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
