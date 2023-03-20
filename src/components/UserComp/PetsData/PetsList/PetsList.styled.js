import styled from 'styled-components';

export const PetsListWrapper = styled.ul`
  @media screen and (min-width: 1600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 60px 33px;
  }

  /* @media screen and (min-width: 768px) {
        padding-left: ${p => p.theme.space[9]}px;
    }  

    @media screen and (min-width: 1280px) {
        padding-left: ${p => p.theme.space[0]}px;
    }  */
`;
