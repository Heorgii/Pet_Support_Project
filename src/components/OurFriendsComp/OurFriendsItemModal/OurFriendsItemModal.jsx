import { useState, useEffect } from 'react';
// import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  // Overlay,
  Modal,
  Table,
  Line,
  Day,
  Time,
} from './OurFriendsItemModal.styled';

// const modalRoot = document.querySelector('#modal-root');

export const OurFriendsItemModal = ({
  workDays,
  dayClosed,
  onClose,
  position,
}) => {
  const [workTime, setWorkTime] = useState('');

  // add position and behavior of the modal window
  /* 
  const { x, y } = position;
  const left = x + 'px';
  const top = y + 16 + 'px';
*/

  useEffect(() => {
    const handleBackdropClick = e => {
      onClose();
    };
    document
      .querySelector('#root')
      .addEventListener('click', handleBackdropClick);

    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document
        .querySelector('#root')
        .removeEventListener('click', handleBackdropClick);
    };
  }, [onClose]);

  useEffect(() => {
    const time = [
      workDays[0].isOpen ? workDays[0].from + ' - ' + workDays[0].to : '',
      workDays[1].isOpen ? workDays[1].from + ' - ' + workDays[1].to : '',
      workDays[2].isOpen ? workDays[2].from + ' - ' + workDays[2].to : '',
      workDays[3].isOpen ? workDays[3].from + ' - ' + workDays[3].to : '',
      workDays[4].isOpen ? workDays[4].from + ' - ' + workDays[4].to : '',
      workDays[5].isOpen ? workDays[5].from + ' - ' + workDays[5].to : '',
      workDays[6].isOpen ? workDays[6].from + ' - ' + workDays[6].to : '',
    ];
    // if (dayClosed !== null) {
    //   time.splice(dayClosed, 1, 'closed');
    //   setWorkTime(time);
    // }
    setWorkTime(time);
  }, [dayClosed, workDays]);

  // return createPortal(
  return (
    // <Overlay onClick={handleBackdropClick}>
    // <Modal onClick={() => onClose()} left={left} top={top}>
    <Modal onClick={() => onClose()}>
      <table>
        <Table>
          <Line>
            <Day>MN</Day>
            <Time>{workTime[0]}</Time>
          </Line>
          <Line>
            <Day>TU</Day>
            <Time>{workTime[1]}</Time>
          </Line>
          <Line>
            <Day>WE</Day>
            <Time>{workTime[2]}</Time>
          </Line>
          <Line>
            <Day>TH</Day>
            <Time>{workTime[3]}</Time>
          </Line>
          <Line>
            <Day>FR</Day>
            <Time>{workTime[4]}</Time>
          </Line>
          <Line>
            <Day>SA</Day>
            <Time>{workTime[5]}</Time>
          </Line>
          <Line>
            <Day>SU</Day>
            <Time>{workTime[6]}</Time>
          </Line>
        </Table>
      </table>
    </Modal>
    // </Overlay>,
    // modalRoot,
  );
};

OurFriendsItemModal.propTypes = {
  workDays: PropTypes.arrayOf(
    PropTypes.shape({
      isOpen: PropTypes.bool,
      from: PropTypes.string,
      to: PropTypes.string,
    }).isRequired,
  ),
  dayClosed: PropTypes.any,
  onClose: PropTypes.func.isRequired,
  // position: PropTypes.any,
};
