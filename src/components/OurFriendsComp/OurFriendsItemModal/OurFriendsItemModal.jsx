import PropTypes from 'prop-types';
import { Modal, Table, Day, Time } from './OurFriendsItemModal.styled';

export const OurFriendsItemModal = workDays => {
  // const { isOpen, from, to } = workDays;
  const workTime = [
    {
      MN: workDays[0],
      TU: workDays[1],
      WE: workDays[2],
      TH: workDays[3],
      FR: workDays[4],
      SA: workDays[5],
      SU: workDays[6],
    },
  ];

  const handleOpenTime = () => {};

  const handleToogleModal = () => {};

  return (
    <div>
      <Day></Day>
      <Time></Time>
    </div>
  );
};

OurFriendsItemModal.propTypes = {
  workDays: PropTypes.arrayOf(
    PropTypes.shape({
      isOpen: PropTypes.bool.isRequired,
      from: PropTypes.string,
      to: PropTypes.string,
    }),
  ),
};
