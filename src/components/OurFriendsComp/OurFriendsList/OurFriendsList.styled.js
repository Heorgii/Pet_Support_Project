import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0;

  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 34px);
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: calc(100vw - 32px);
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  }
`;

const Notify = styled.p`
  margin-bottom: 15px;
  font-weight: 500;
`;

export { List, Notify };
