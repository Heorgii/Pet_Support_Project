import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import heard from 'images/svg/heard.png';
import no_Photo from 'images/No-image-available.webp';
import {
  NoticesContainerItem,
  ContainerCloseModal,
  ContainerPositionForCloseModal,
  ContainerInfo,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  BtnContact,
  BtnAddFavorits,
  BackDrop,
  TdTable,
  TdTable2,
  Table,
  Comments,
  MainComments,
  ContainerComments,
  NoticeContainerButtom,
} from './ModalNotice.styled';

export const ModalNotices = () => {
  const dispatch = useDispatch();
  const modal = useSelector(modalComponent);

  const closeModalForItemPet = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  const [data, setData] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  // const [status, setStatus] = useState('idle');

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
    if (modal.id !== '') {
      fetchNoticesList();
    }
  }, [itemForFetch, modal.id]);

  return ReactDOM.createPortal(
    Object.values(modal)[0] === 'itemPet' && (
      <BackDrop onClick={closeModalForItemPet}>
        <NoticesContainerItem onClick={e => e.stopPropagation()}>
          <ContainerPositionForCloseModal>
            <ContainerCloseModal onClick={closeModalForItemPet}>
              <MdClose style={{ width: '15.5px', height: '15.5px' }} />
            </ContainerCloseModal>
          </ContainerPositionForCloseModal>
          <ContainerInfo>
            <ContainerStatus>{data.status}</ContainerStatus>
            <ImgItem src={no_Photo} />
            <div>
              <NoticeItemTitle>Сute pet looking for a home</NoticeItemTitle>
              <Table>
                <tbody>
                  <tr>
                    <TdTable>Name:</TdTable>
                    <TdTable2>{data.name}</TdTable2>
                  </tr>
                  <tr>
                    <TdTable>Birthday:</TdTable>
                    <TdTable2>{data.birthday}</TdTable2>
                  </tr>
                  <tr>
                    <TdTable>Breed:</TdTable>
                    <TdTable2>{data.breed}</TdTable2>
                  </tr>
                  <tr>
                    <TdTable>Location:</TdTable>
                    <TdTable2>{data.location}</TdTable2>
                  </tr>
                  <tr>
                    <TdTable>The sex:</TdTable>
                    <TdTable2>{data.sex}</TdTable2>
                  </tr>
                  <tr>
                    <TdTable>Email:</TdTable>
                    <TdTable2>{data.email}</TdTable2>
                  </tr>
                  <tr>
                    <TdTable>Phone:</TdTable>
                    <TdTable2>{data.phone}</TdTable2>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ContainerInfo>
          <ContainerComments>
            <MainComments>Comments: </MainComments>
            <Comments>{data.comments}</Comments>
          </ContainerComments>
          <NoticeContainerButtom>
            <BtnContact>Contacts</BtnContact>
            <BtnAddFavorits>
              Add to{' '}
              <img src={heard} alt="heard" style={{ marginLeft: '8px' }} />
            </BtnAddFavorits>
          </NoticeContainerButtom>
        </NoticesContainerItem>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};
