import { baseColor } from 'components/baseStyles/Variables.styled';
import { Field, Form } from 'formik';
import { ReactComponent as iconSearch } from 'images/svg/icon_search.svg';


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
margin-left: auto;
margin-right: auto;

  width: 100%;
max-width: 280px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
max-width: 608px;
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
  padding-right: 5px;

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
    cursor: pointer;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIxQzE2Ljk3MDYgMjEgMjEgMTYuOTcwNiAyMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzQzcuMDI5NDQgMyAzIDcuMDI5NDQgMyAxMkMzIDE2Ljk3MDYgNy4wMjk0NCAyMSAxMiAyMVoiIHN0cm9rZT0iIzExMTExMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE1IDlMOSAxNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkgOUwxNSAxNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cgo=);
    background-size: cover;
    height: 20px;
    width: 20px;
  }
}



  @media screen and (min-width: 768px) {

  &::-webkit-search-cancel-button,
  &::-webkit-search-decoration,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    height: 24px;
    width: 24px;
  }
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


