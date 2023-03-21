import { NoticesCategoriesItem } from './NoticeCategoryItem/NoticeCategoryItem';
import { ModalNotices } from '../ModalNotice/ModalNotice';
import data from './pets.json';
import { v4 as uuidv4 } from 'uuid';

export const NoticesCategoriesList = () => {
  return (
    <div>
      <h1>Notices Categories List</h1>
      {data.map(key => (
        <NoticesCategoriesItem data={key} key={uuidv4()} />
      ))}
      <ModalNotices />
    </div>
  );
};
