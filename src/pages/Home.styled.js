import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

// import background from '../../src/images/labrador.png';

const Dog = styled.div`
position: 'absolute',
          bottom: -200,
          left: 20,
       overflow: 'hidden',
       
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          width: 280,
          height: 564,
`;

const Title = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  color: ${baseColor.colors.blackText};

  margin-top: 60px;
`;

export { Dog, Title };
