import styled from 'styled-components';

const LoginButton = styled.button`
  cursor: pointer;
  //   outline: none;
  background-color: #ffffff;
  color: 111111;
  width: 95px;
  height: 35px;
  border: 2px solid #f59256;
  border-radius: 40px;

  &:hover {
    color: #fff;
    background-color: #f59256;
  }
  &:focus {
    color: #fff;
    background-color: #f59256;

    outline: none;
  }
`;

export const LoginBTN = () => {
  return <LoginButton>Login</LoginButton>;
};
