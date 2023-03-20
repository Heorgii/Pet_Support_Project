import styled from 'styled-components';

export const UserDataTitleStyle = styled.h2`
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.fontHeight.l};
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes[6]};
    letter-spacing: 0;
    padding-left: ${p => p.theme.space[9]}px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: ${p => p.theme.space[5]}px;
  }
`;
