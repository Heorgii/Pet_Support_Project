import styled from 'styled-components';
const Text = styled.p`
  font-family: 'Poppins Bold', sans-serif;
  font-style: normal;
  font-size: 28px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0.07em;
  color: #111111;
`;

const AccentLetter = styled.span`
  color: #f59256;
`;

export const Logo = () => {
  return (
    <Text>
      pe<AccentLetter>t</AccentLetter>ly
    </Text>
  );
};
