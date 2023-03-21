import { useState, useEffect, useRef } from 'react';
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
import defaultImg from 'images/defaultPets.png';
import { OurFriendsItemModal } from '../OurFriendsItemModal/OurFriendsItemModal';

export const OurFriendsItem = ({ friend }) => {
  const [state, setState] = useState(friend);
  const [workTime, setWorkTime] = useState('8:00- 17:00');
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
  } = state;

  // find address card for render modal window
  const cardElementRef = useRef();
  const [position, setPosition] = useState('');
  useEffect(() => {
    try {
      const position = cardElementRef.current.getBoundingClientRect();
      setPosition(position);
      console.log(position);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  // toggle modal window
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(state => !state);

  const hrefEmail = `mailto:${email}`;
  const hrefPhone = `tel:${phone}`;

  // (() => {
  //   try {
  //     // debugger;
  //     workDays.forEach(day => {
  //       if (day.isOpen) {
  //         const time = day.from + ' - ' + day.to;
  //         return setWorkTime(time);
  //       }
  //       return;
  //     });
  //   } catch (e) {
  //     console.log(`Error message: ${e.message}`);
  //   }
  // })();

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
              <Link
                aria-label="work days"
                onClick={toggleModal}
                ref={cardElementRef}
              >
                {workTime}
              </Link>
            ) : (
              <Text>-------------------------</Text>
            )}
            {showModal && (
              <OurFriendsItemModal
                onClose={toggleModal}
                workDays={workDays}
                position={position}
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
