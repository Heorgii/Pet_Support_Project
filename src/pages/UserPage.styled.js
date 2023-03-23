import styled from 'styled-components';

export const UserPageWrapper = styled.div`
  @media (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    /* max-width: 736px; */
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    /* max-width: 1280px; */
  }
`;

export const UserDataWrapper = styled.div`
  @media screen and (min-width: 1280px) {
  }
`;

export const UserDataContainer = styled.div`
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    position: relative;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
  /* @media screen and (min-width: 768px) {
    }

    @media screen and (min-width: 768px) {
    } */
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
    p.theme.colors.accent}; */
  /* @media screen and (min-width: 768px) {
    } 
    
    @media screen and (min-width: 1280px) {
    }  */
`;

export const MyPetContainer = styled.div`
  display: flex;
  width: 80%;
  border-bottom: none;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const MyPetTitle = styled.button`
  outline: none;
  letter-spacing: 0.04em;
  cursor: pointer;

  &:hover,
  :focus {
  }

  @media (max-width: 400px) {
    &:not(:last-child) {
    }
  }

  @media (min-width: 768px) {
    border-bottom: none;

    &:hover,
    :focus {
    }
  }
`;
