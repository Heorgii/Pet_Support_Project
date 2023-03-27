import { useState } from 'react';//useEffect
import { useDispatch } from 'react-redux';
import { UserDataItem } from './UserDataItem/UserDataItem';
// import { useAuth } from 'hooks/useAuth';
import { useAuth } from 'redux/UserPage/auth/useAuth';
import { authOperations } from 'redux/UserPage/auth';
import defaultUserPhoto from '../../../images/UserData/defaultUserPhoto.png';
import {
  EditCameraForm,
  EditCameraStyle,
  EditCameraWrapper,
  EditPhotoInput,
  EditPhotoLabel,
  UserDataContainer,
  UserDataImg,
  UserDataImgWrapper,
  UserDataList,
} from './UserData.styled';

export const UserData = () => {
  const [active, setActive] = useState('');
  const dispatch = useDispatch();

  let { user } = useAuth();
  let profile = false;

  const changeAvatar = e => {
    const data = new FormData();
    data.append('avatar', e.target.files[0]);
    dispatch(authOperations.update(data));
  };

  return (
    <>
      <UserDataContainer>
        <UserDataImgWrapper>
          <UserDataImg
            src={user.avatarUrl ? user.avatarUrl : defaultUserPhoto}
            alt="User"
          />
          <EditCameraForm>
            <EditCameraWrapper>
              <EditPhotoLabel htmlFor="user_photo">
                <EditCameraStyle />
                <span>Edit photo</span>
              </EditPhotoLabel>
            </EditCameraWrapper>
            <EditPhotoInput
              type="file"
              name="edit photo"
              id="user_photo"
              onChange={changeAvatar}
              accept=".gif,.jpg,.jpeg,.png"
            />
          </EditCameraForm>
        </UserDataImgWrapper>

        <UserDataList>
          <UserDataItem
            profile={profile}
            label={'Name:'}
            defaultValue={user.userName}
            type="text"
            name="userName"
            active={active}
            setActive={setActive}
            id="name"
          />

          <UserDataItem
            profile={profile}
            label={'Email:'}
            defaultValue={user.email}
            type="email"
            name="email"
            active={active}
            setActive={setActive}
            id="email"
          />

          <UserDataItem
            profile={profile}
            label={'Birthday:'}
            defaultValue={user.birthday || '01.01.1900'}
            type="text"
            name="birthday"
            active={active}
            setActive={setActive}
            id="birthday"
          />

          <UserDataItem
            profile={profile}
            label={'Phone:'}
            defaultValue={user.phone}
            type="tel"
            name="phone"
            active={active}
            setActive={setActive}
            id="phone"
          />

          <UserDataItem
            profile={profile}
            label={'City:'}
            defaultValue={user.city}
            type="text"
            name="city"
            active={active}
            setActive={setActive}
            id="city"
          />
        </UserDataList>
      </UserDataContainer>
    </>
  );
};
