import styled from 'styled-components';

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: end;
  //   justify-content: space-between;
  //   width: 100%;
  //   margin-left: 80px;
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    justify-content: end;
  }
  @media screen and (min-width: 1280px) {
    justify-content: space-between;
    width: 100%;
    margin-left: 80px;
  }
`;
