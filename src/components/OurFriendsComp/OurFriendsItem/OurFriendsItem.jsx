import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import EllipsisText from 'react-ellipsis-text';
import { OurFriendsItemModal } from '../OurFriendsItemModal/OurFriendsItemModal';
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
import defaultImg from 'images/defaultPets.png';

export const OurFriendsItem = ({ friend }) => {
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
  } = friend;
  const [workTime, setWorkTime] = useState('');
  const [dayClosed, setDayClosed] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(state => !state);

  const hrefEmail = `mailto:${email}`;
  const hrefPhone = `tel:${phone}`;

  // gets user time and compare with workDays
  const userDay = new Date().getDay() - 1;
  // const userHours = new Date().getHours();
  const userHours = 20;

  useEffect(() => {
    try {
      const day = workDays[userDay];
      if (day.isOpen) {
        const start = Number(day.from.split(':')[0]);
        const finish = Number(day.to.split(':')[0]);

        if (userHours < start) {
          setWorkTime('closed');
          setDayClosed(userDay);
          return;
        }
        if (userHours > finish) {
          setWorkTime('closed');
          setDayClosed(userDay);
          return;
        }
        setWorkTime(day.from + ' - ' + day.to);
      }
      if (!day.isOpen) return setWorkTime('not working today');
      return;
    } catch (e) {
      console.log(`Error message: ${e.message}`);
    }
  }, [userDay, userHours, workDays]);

  return (
    <Item key={id} id={id}>
      <Title href={url}>{title}</Title>
      <Info>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            width="110"
            height="78"
            loading="lazy"
          />
        ) : (
          <Image
            src={defaultImg}
            alt={title}
            width="110"
            height="78"
            loading="lazy"
          />
        )}
        <InfoWrapper>
          <TextWrapper>
            <Text>Time:</Text>
            {workDays !== null ? (
              <Link aria-label="work days" onClick={toggleModal}>
                {workTime}
              </Link>
            ) : (
              <Text>-------------------------</Text>
            )}
            {showModal && (
              <OurFriendsItemModal
                onClose={toggleModal}
                workDays={workDays}
                dayClosed={dayClosed}
              />
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Address:</Text>
            {address ? (
              <Link href={addressUrl} aria-label="address" target="blank">
                <EllipsisText text={address} length={25} />
              </Link>
            ) : (
              <Text>-------------------------</Text>
            )}
          </TextWrapper>
          <TextWrapper>
            <Text>Email:</Text>
            {email ? (
              <Link href={hrefEmail} aria-label="email">
                <EllipsisText text={email} length={25} />
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
      imageUrl: PropTypes.string,
      address: PropTypes.string,
      workDays: PropTypes.any,
      phone: PropTypes.string,
      email: PropTypes.string,
    }),
  ),
};
