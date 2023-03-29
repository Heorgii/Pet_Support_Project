import no_Photo from 'images/No-image-available.webp';
import { openModalWindow } from 'hooks/modalWindow';
import { useDispatch, useSelector } from 'react-redux';
import { addModal } from 'redux/modal/operation';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { baseColor } from 'components/baseStyles/Variables.styled';
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
import { selecId } from 'redux/auth/selectors';
import { authOperations } from 'redux/UserPage/auth';

export const NoticesCategoriesItem = ({
  data,
  addToFavoriteFunction,
  isInFavorite,
}) => {
  const { _id } = useSelector(selecId); //isLoggedIn
  const dispatch = useDispatch();
  let id = '';
  _id == null ? (id = 1) : (id = _id);

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
            {isInFavorite ? (
              <AiFillHeart size={28} color={baseColor.colors.orangeLight} />
            ) : (
              <AiOutlineHeart size={28} color={baseColor.colors.orangeLight} />
            )}
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
                  {data.birthday
                    ? Math.round(
                        (Date.now() - Date.parse(data.birthday)) /
                          31536000 /
                          1000,
                      ) + ' years'
                    : 'no info'}
                </TdTable2>
              </tr>
              {data.price && (
                <tr>
                  <TdTable>Price:</TdTable>
                  <TdTable2>{data.price}</TdTable2>
                </tr>
              )}
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
          {data.owner === id && (
            //  onClick={() => dispatch(authOperations.removePet(_id))}
            <BtnDelete>
              Delete{' '}
              <img
                loading="lazy"
                src={delBack}
                alt="delete button"
                style={{ marginLeft: '12px' }}
              />
            </BtnDelete>
          )}
        </NoticeContainerButton>
      </NoticesContainerItem>
    </ItemContainer>
  );
};
