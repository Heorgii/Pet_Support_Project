import styled from 'styled-components';
// import { baseColor } from 'components/baseStyles/Variables.styled';

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: calc(100vw - 64px);
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    grid-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: calc(100vw - 128px);
    grid-template-columns: repeat(auto-fill, minmax(395px, 1fr));
  }
`;

const Notify = styled.p`
  margin-bottom: 15px;
  font-weight: 500;
`;

export { List, Notify };
