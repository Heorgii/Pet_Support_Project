import React from 'react';
import { Formik } from 'formik';
import {
  ButtonStyled,
  FormStyled,
  FieldStyled,
  LabelStyled,
  IconSearch,
} from './NoticesSearch.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { addQuery } from 'redux/query/slice';

export const NoticesSearch = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Title>Find your favorite pet</Title>

      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, { setSubmitting }) => {
          if (values.search === '') {
            Notiflix.Notify.warning('Fill the field!');
            setSubmitting(false);
          } else {
            dispatch(addQuery(values.search));
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values, handleSubmit }) => (
          <FormStyled onSubmit={handleSubmit}>
            <LabelStyled>
              <FieldStyled
                id="search"
                type="search"
                name="search"
                placeholder="Search"
                value={values.search}
              />
              <div><ButtonStyled
                type="submit"
                disabled={isSubmitting}
                onSubmit={handleSubmit}
              >
                <IconSearch />
              </ButtonStyled></div>
            </LabelStyled>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};
