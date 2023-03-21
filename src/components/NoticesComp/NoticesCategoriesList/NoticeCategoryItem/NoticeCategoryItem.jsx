import data from './pets.json';
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';
import { closeModalWindow } from '../../../../hooks/modalWindow';
import heard from '../../../../images/svg/heard.png';
import {
  NoticesContainerItem,
  ContainerCloseModal,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  BtnContact,
  BtnAddFavorits,
  BackDrop,
} from './NoticeCategoryItem.styled';

export const NoticesCategoriesItem = () => {
  const key = Object.keys(data);
  return ReactDOM.createPortal(
    <BackDrop onClick={e => closeModalWindow(e)}>
      <NoticesContainerItem onClick={e => e.stopPropagation()}>
        <ContainerCloseModal onClick={e => closeModalWindow(e)}>
          <MdClose style={{ width: '15.5px', height: '15.5px' }} />
        </ContainerCloseModal>
        <ContainerStatus>{data.status}</ContainerStatus>
        <ImgItem />
        <NoticeItemTitle>Сute dog looking for a home</NoticeItemTitle>
        <table>
          <thead></thead>
          <tbody>
            {key.map(item => (
              <tr key={item}>
                <td>{item}</td>
                <td key={data[item]}>{data[item]}</td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
        <BtnContact>Contacts</BtnContact>
        <BtnAddFavorits>
          Add to <img src={heard} alt="heard" />
        </BtnAddFavorits>
      </NoticesContainerItem>
    </BackDrop>,
    document.querySelector('#popup-root'),
  );
};
