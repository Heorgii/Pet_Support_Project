import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const AccountButton = styled.div`
  //   position: relative;
  width: 164px;
  height: 35px;
  border: 2px solid ${baseColor.colors.orangeLight};
  border-radius: 40px;

  @media screen and (min-width: 768px) and (max-width: 1280px) {
    height: 44px;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
  }
`;
export { AccountButton };
