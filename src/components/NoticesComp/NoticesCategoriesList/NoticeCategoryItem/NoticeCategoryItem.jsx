import no_Photo from 'images/No-image-available.webp';
import { openModalWindow } from 'hooks/modalWindow';
// import { useAuth } from 'redux/UserPage/auth/useAuth';
// import { onInfo, onSuccess } from 'components/helpers/Messages/NotifyMessages';
import { useDispatch } from 'react-redux';
import { addModal } from 'redux/modal/operation';
import akar_icons_heart from 'images/svg/akar-icons_heart.svg';
import delBack from 'images/svg/icon_delete.svg';
import {
  NoticesContainerItem,
  ContainerInfo,
  ImgItem,
  ContainerStatus,
  NoticeItemTitle,
  BtnLearnMore,
  BtnDelete,
  ItemContainer,
  TdTable,
  TdTable2,
  Table,
  NoticeContainerButton,
  BtnForFavorite,
  TBody,
} from './NoticeCategoryItem.styled';

export const NoticesCategoriesItem = ({ data, addToFavoriteFunction }) => {

  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
  console.log(data.owner, user._id);

  const openModalForItemPet = e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.dataset.modal === 'itemPet') {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
          id: e.currentTarget.dataset.id,
        }),
      );
      openModalWindow(e, null);
    }
  };

  return (
    <ItemContainer>
      <NoticesContainerItem>
        <ContainerInfo>
          <ContainerStatus>{data.category}</ContainerStatus>
          <BtnForFavorite onClick={addToFavoriteFunction(data._id)}>
            <img src={akar_icons_heart} alt="Add to favorite" />
          </BtnForFavorite>
          <ImgItem
            src={
              data.imageUrl === '' || data.imageUrl === undefined
                ? no_Photo
                : data.imageUrl
            }
            loading="lazy"
          />
          <NoticeItemTitle>{data.title}</NoticeItemTitle>
          <Table>
            <TBody>
              <tr>
                <TdTable>Breed:</TdTable>
                <TdTable2>{data.breed}</TdTable2>
              </tr>
              <tr>
                <TdTable>Place:</TdTable>
                <TdTable2>{data.location}</TdTable2>
              </tr>
              <tr>
                <TdTable>Age:</TdTable>
                <TdTable2>
                  {Math.round(
                    (Date.now() - Date.parse(data.createdAt)) / 31536000 / 1000,
                  )}{' '}
                  years
                </TdTable2>
              </tr>
            </TBody>
          </Table>
        </ContainerInfo>
        <NoticeContainerButton>
          <BtnLearnMore
            onClick={openModalForItemPet}
            data-modal="itemPet"
            data-id={data._id}
          >
            Learn more
          </BtnLearnMore>
          {data.owner === user._id && (
            <BtnDelete>
              Delete{' '}
              <img
                loading="lazy"
                src={delBack}
                alt="heard"
                style={{ marginLeft: '12px' }}
              />
            </BtnDelete>
          )}
        </NoticeContainerButton>
      </NoticesContainerItem>
    </ItemContainer>
  );
};
