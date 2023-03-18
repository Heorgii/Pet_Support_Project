import styled from 'styled-components';

const Container = styled.div`
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'column'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: c ${props => props.justifyContent || 'center'};
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

const Section = styled.section`
  margin: ${props => props.margin || '60px 0 0 0'};
`;

const Title = styled.h1`
  margin: ${props => props.margin || '0 0 28px 0'};
  text-align: ${props => props.position || 'center'};
  font-size: ${props => props.size || '24px'};
  font-weight: 700;
  line-height: 1.375;
  color: #000000;

  @media screen and (min-width: 768px) {
    margin: ${props => props.margin || '0 0 40px 0'};
  text-align: ${props => props.position || 'center'};
  font-size: ${props => props.size || '48px'};
  }
`;

export { Container, Section, Title };
