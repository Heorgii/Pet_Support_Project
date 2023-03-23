import styled from 'styled-components';
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 20px 0px 20px;

  @media screen and (min-width: 768px) {
    padding: 24px 32px 0px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 16px 20px 0px 20px;
    width: 1280px;
  }
`;

export { HeaderContainer };
