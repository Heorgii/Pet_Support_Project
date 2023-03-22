import data from './pets.json';
import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';
import { closeModalWindow } from '../../../hooks/modalWindow';
import heard from '../../../images/svg/heard.png';
import no_Photo from '../../../images/No-image-available.webp';
import {
  NoticesContainerItem,
  ContainerCloseModal,
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
  ContainerComments,
  NoticeContainerButtom,
} from './ModalNotice.styled';

export const ModalNotices = () => {
  return ReactDOM.createPortal(
    <BackDrop onClick={e => closeModalWindow(e)}>
      <NoticesContainerItem onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <ContainerCloseModal onClick={e => closeModalWindow(e)}>
            <MdClose style={{ width: '15.5px', height: '15.5px' }} />
          </ContainerCloseModal>
        </div>
        <ContainerInfo>
          <ContainerStatus>{data.status}</ContainerStatus>
          <ImgItem src={no_Photo} />
          <div>
            <NoticeItemTitle>Сute pet looking for a home</NoticeItemTitle>
            <div>
              <Table>
                <thead></thead>
                <tbody>
                  <tr>
                    <TdTable>Name:</TdTable>
                    <TdTable2>{data.name}</TdTable2>
                  </tr>
                  <tr>
                    <TdTable>Birthday:</TdTable>
                    <TdTable2>{data.date}</TdTable2>
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
                <tfoot></tfoot>
              </Table>
            </div>
          </div>
        </ContainerInfo>
        <ContainerComments>
          <span style={{ fontWeight: 600 }}>Comments: </span>
          {data.comments}
          <Comments></Comments>
        </ContainerComments>
        <NoticeContainerButtom>
          <BtnContact>Contacts</BtnContact>
          <BtnAddFavorits>
            Add to <img src={heard} alt="heard" />
          </BtnAddFavorits>
        </NoticeContainerButtom>
      </NoticesContainerItem>
    </BackDrop>,
    document.querySelector('#popup-root'),
  );
};
