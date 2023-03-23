import styled from 'styled-components';
import { baseColor } from 'components/baseStyles/Variables.styled';

const Container = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent || 'center'};
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    flex-direction: ${props => props.flexDirection || 'column'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: c ${props => props.justifyContent || 'center'};
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }zz
`;

const Section = styled.section`
  margin: ${props => props.margin || '0 0 0 0'};
  width: 100vw;
`;

const Title = styled.h1`
  margin: ${props => props.margin || '0 0 28px 0'};
  text-align: ${props => props.position || 'center'};
  font-family: 'Manrope', sans-serif;
  font-size: ${props => props.size || '24px'};
  font-weight: 700;
  line-height: 1.375;
  color: ${baseColor.colors.black};

  @media screen and (min-width: 768px) {
    margin: ${props => props.margin || '0 0 40px 0'};
    text-align: ${props => props.position || 'center'};
    font-size: ${props => props.size || '48px'};
  }
`;

export { Container, Section, Title };
