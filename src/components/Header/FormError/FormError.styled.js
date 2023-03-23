import styled from 'styled-components';

const ErrorElem = styled.div`
  padding-top: 5px;
  display: block;
  position: absolute;
  width: 100%;
  right: 50%;
  transform: translateX(50%);
  font-family: 'Manrope, sans-serif';
  font-size: 14px;
  text-align: center;
  color: #e00e0e;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`;

export default ErrorElem;
