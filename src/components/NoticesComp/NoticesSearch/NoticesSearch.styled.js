import { baseColor } from 'components/baseStyles/Variables.styled';
import { Field, Form } from 'formik';
import { ReactComponent as iconSearch } from '../../../images/svg/icon_search.svg';

import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  text-align: center;
  color: ${baseColor.colors.blackText};

  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 48px;

    margin-bottom: 40px;
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
`;

export const FormStyled = styled(Form)`
  margin-bottom: 28px;

  width: 100%;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const FieldStyled = styled(Field)`
  all: unset;

  width: 100%;

  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  align-items: center;
  letter-spacing: 0.04em;
  color: ${baseColor.colors.inpText};
  margin-right: 10px;
  padding-right: 10px;

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
    cursor: pointer;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPHBhdGggZmlsbD0iIzExMSIgZD0iTTE2IDI2LjY2NlYxNnYxMC42NjZaTTE2IDE2VjUuMzMzIDE2Wm0wIDBoMTAuNjY2SDE2Wm0wIDBINS4zMzMgMTZaIi8+CiAgPHBhdGggc3Ryb2tlPSIjMTExIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTguNDYyIDIzLjU0NyAxNiAxNm0wIDAgNy41MzctNy41NDdNMTYgMTZsNy41NDcgNy41MzdNMTYgMTYgOC40NTIgOC40NjIiLz4KPC9zdmc+);
    background-size: cover;
    height: 20px;
    width: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 40px;

  margin-left: 0;
  margin-right: 0;
  padding: 10px;

  background: ${baseColor.colors.white};

  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    margin-left: 48px;
    margin-right: 48px;
    height: 44px;
    padding: 8px 20px 8px 20px;
    border-radius: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-left: 320px;
    margin-right: 320px;
  }
`;

export const IconSearch = styled(iconSearch)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: block;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
