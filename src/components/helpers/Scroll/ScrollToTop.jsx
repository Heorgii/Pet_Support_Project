import { useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { ScrollBtn } from './ScrollToTop.styled';

const ScrollToTop = () => {
  const [isScroll, setIsScroll] = useState(false);

  const scrollBy = () => {
    const { height: cardHeight } = document
      .querySelector('.list')
      .firstElementChild.getBoundingClientRect();

    return window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    const start = document.querySelector('#header');
    return window.scrollTo({ top: start, behavior: 'smooth' });
  };

  return (
    <ScrollBtn type="button" aria-label="Arrow up" onClick={this.scrollToTop}>
      <BsArrowUpCircleFill size={30} />
    </ScrollBtn>
  );
};

export default ScrollToTop;
