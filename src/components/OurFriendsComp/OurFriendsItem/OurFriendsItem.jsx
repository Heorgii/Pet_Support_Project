import { useState } from 'react';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import {
  Item,
  Title,
  Info,
  TextWrapper,
  InfoWrapper,
  Text,
  Link,
  Image,
} from './OurFriendsItem.styled';
import { OurFriendsItemModal } from '../OurFriendsItemModal/OurFriendsItemModal';

export const OurFriendsItem = ({ friend }) => {
  const [state, setState] = useState({ friend });
  const [showModal, setShowModal] = useState(false);
  const [workTime, setWorkTime] = useState('8:00- 19:00');

  const {
    id,
    title,
    url,
    addressUrl,
    imageUrl,
    address,
    workDays,
    phone,
    email,
  } = state.friend;

  const hrefEmail = `mailto:${email}`;
  const hrefPhone = `tel:${phone}`;

  // const handleModal = workDays => {
  //   setWorkTime(workDays);
  //   toggleModal();
  // };

  // const toggleModal = () => {
  //   setShowModal(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  return (
    <Item key={id} id={id}>
      <Title href={url}>{title}</Title>
      <Info>
        <Image
          src={imageUrl}
          alt={title}
          width="110"
          height="78"
          loading="lazy"
        />
        <InfoWrapper>
          <TextWrapper>
            <Text>Time:</Text>
            <Text>-------------------------</Text>
            {/* {workDays ? (
              <Link aria-label="work days" onClick={handleModal(workDays)}>
                {workTime}
              </Link>
            ) : (
              <Text>-------------------------</Text>
            )}
            {showModal && (
              <OurFriendsItemModal onClick={toggleModal} workDays={workDays} />
            )} */}
          </TextWrapper>
          <TextWrapper>
            <Text>Address:</Text>
            {address ? (
              <Link href={addressUrl} aria-label="address">
                <EllipsisText text={address} length={'25'} />
              </Link>
            ) : (
              <Text>-------------------------</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Email:</Text>
            {email ? (
              <Link href={hrefEmail} aria-label="email">
                <EllipsisText text={email} length={'25'} />
              </Link>
            ) : (
              <Text>-------------------------</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Phone:</Text>
            {phone ? (
              <Link href={hrefPhone} aria-label="phone">
                {phone}
              </Link>
            ) : (
              <Text>-------------------------</Text>
            )}
          </TextWrapper>
        </InfoWrapper>
      </Info>
    </Item>
  );
};

OurFriendsItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      addressUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      address: PropTypes.string,
      workDays: PropTypes.array,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
  ),
};
