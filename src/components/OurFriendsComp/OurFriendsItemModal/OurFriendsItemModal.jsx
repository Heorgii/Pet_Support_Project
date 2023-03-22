import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Table, Line, Day, Time } from './OurFriendsItemModal.styled';

export const OurFriendsItemModal = ({ workDays, dayClosed, onClose }) => {
  const [workTime, setWorkTime] = useState('');

  useEffect(() => {
    // closes modal with a click on the root
    const handleBackdropClick = e => {
      onClose();
    };
    document
      .querySelector('#root')
      .addEventListener('click', handleBackdropClick);

    // closes modal with a click on the Escape
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // removes all event listener
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

  return (
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
};
