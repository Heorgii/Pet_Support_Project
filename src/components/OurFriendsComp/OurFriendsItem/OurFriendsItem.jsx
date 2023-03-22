import { useState, useEffect } from 'react'; // useRef
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
  const [state] = useState(friend); //, setState
  const [workTime, setWorkTime] = useState('');
  const [dayClosed, setDayClosed] = useState(null);
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
  // const cardElementRef = useRef();
  // const [position, setPosition] = useState('');

  // useEffect(() => {
  //   try {
  //     const position = cardElementRef.current.getBoundingClientRect();
  //     setPosition(position);
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // }, []);

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(state => !state);

  const hrefEmail = `mailto:${email}`;
  const hrefPhone = `tel:${phone}`;

  // get user time and compare with workDays

  // (() => {
  // try {
  //   workDays.forEach(day => {
  //     if (day.isOpen) {
  //       const time = day.from + ' - ' + day.to;
  //       return setWorkTime(time);
  //     }
  //     return;
  //   });
  // } catch (e) {
  //   console.log(`Error message: ${e.message}`);
  // }
  // })();

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
          setWorkTime('now closed');
          setDayClosed(userDay);
          return;
        }
        if (userHours > finish) {
          setWorkTime('now closed');
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
              <Link
                aria-label="work days"
                onClick={toggleModal}
                // ref={cardElementRef}
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
                dayClosed={dayClosed}
                display="flex"
                // position={position}
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
