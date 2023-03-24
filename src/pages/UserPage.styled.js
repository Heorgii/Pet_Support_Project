import { baseColor } from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const UserPageWrapper = styled.div`
  @media (min-width: 320px) {
    width: 100%;
    padding-bottom: 2px;
    padding-left: 28px;
    padding-right: 28px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 16px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    padding-right: 32px;
  }
`;

export const UserDataWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    margin-right: 16px;
  }
`;

export const UserDataContainer = styled.div`
  background-color: ${baseColor.colors.white};
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  margin-bottom: 12px;
  margin-top: 18px;
  padding-top: 28px;
  padding-bottom: 28px;

  @media screen and (min-width: 768px) {
    position: relative;
    margin-bottom: 12px;
    margin-top: 12px;
    padding-right: 12px;
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 100px;
    margin-top: 24px;
    padding-right: 32px;
    padding-top: 28px;
    padding-bottom: 28px;
  }
`;

export const UserAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-left: 16px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 100px;
  }
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
    border-bottom: 2px solid ${baseColor.colors.orangeLight};
  }
`;

export const MyPetTitle = styled.h2`
  outline: none;
  font-family: Manrope, sans-serif;
  color: ${baseColor.colors.blackText}
  font-size: 32px;
  font-weight: 500;
  line-height: 1.37;
  letter-spacing: 0.04em;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 0px;



  @media (max-width: 400px) {
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    font-size: 20px;
    padding-bottom: 60px;

  }
`;
