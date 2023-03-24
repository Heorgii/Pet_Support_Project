import styled from 'styled-components';

const MobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Container = styled(MobileContainer)`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    // justify-content: center;
    // align-items: center;
  }
`;

export { MobileContainer, Container };
