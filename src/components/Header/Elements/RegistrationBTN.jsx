import styled from 'styled-components';

const RegistrationButton = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  color: 111111;
  width: 144px;
  height: 35px;
  border: 2px solid #f59256;
  border-radius: 40px;

  &:hover {
    color: #fff;
    background-color: #f59256;
  }
  &:focus {
    background-color: #f59256;
    color: #fff;
  }
`;

export const RegistrationBTN = () => {
  return <RegistrationButton>Registration</RegistrationButton>;
};
