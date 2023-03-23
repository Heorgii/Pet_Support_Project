import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    // flex-grow: 10;
    // width: 100%;
    // justify-content: end;
  }
`;

export { Container };
