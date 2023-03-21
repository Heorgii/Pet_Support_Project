import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  Overlay,
  Modal,
  Table,
  Line,
  Day,
  Time,
} from './OurFriendsItemModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const OurFriendsItemModal = ({ position, onClose, workDays }) => {
  const { x, y } = position;
  const left = x + 'px';
  const top = y + 16 + 'px';

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const workTime = {
    MN: workDays[0].isOpen ? workDays[0].from + ' - ' + workDays[0].to : '',
    TU: workDays[1].isOpen ? workDays[1].from + ' - ' + workDays[1].to : '',
    WE: workDays[2].isOpen ? workDays[2].from + ' - ' + workDays[2].to : '',
    TH: workDays[3].isOpen ? workDays[3].from + ' - ' + workDays[3].to : '',
    FR: workDays[4].isOpen ? workDays[4].from + ' - ' + workDays[4].to : '',
    SA: workDays[5].isOpen ? workDays[5].from + ' - ' + workDays[5].to : '',
    SU: workDays[6].isOpen ? workDays[6].from + ' - ' + workDays[6].to : '',
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal onClick={() => onClose()} left={left} top={top}>
        <table>
          <Table>
            <Line>
              <Day>MN</Day>
              <Time>{workTime.MN}</Time>
            </Line>
            <Line>
              <Day>TU</Day>
              <Time>{workTime.TU}</Time>
            </Line>
            <Line>
              <Day>WE</Day>
              <Time>{workTime.WE}</Time>
            </Line>
            <Line>
              <Day>TH</Day>
              <Time>{workTime.TH}</Time>
            </Line>
            <Line>
              <Day>FR</Day>
              <Time>{workTime.FR}</Time>
            </Line>
            <Line>
              <Day>SA</Day>
              <Time>{workTime.SA}</Time>
            </Line>
            <Line>
              <Day>SU</Day>
              <Time>{workTime.SU}</Time>
            </Line>
          </Table>
        </table>
      </Modal>
    </Overlay>,
    modalRoot,
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
  onClose: PropTypes.func.isRequired,
  position: PropTypes.any,
};
