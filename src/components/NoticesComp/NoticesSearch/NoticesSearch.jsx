import React from 'react';
import { Formik } from 'formik';
import {
  Title,
  ButtonStyled,
  FormStyled,
  FieldStyled,
  LabelStyled,
  IconSearch,
} from './NoticesSearch.styled';
import Notiflix from 'notiflix';

export const NoticesSearch = () => {
  return (
    <div>
      <Title>Find your favorite pet</Title>

      <Formik
        initialValues={{ search: '' }}

        onSubmit={(values, { setSubmitting }) => {

          if (values.search === '') {
            Notiflix.Notify.warning('Fill the field!');
          } else {

            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values, handleSubmit, handleChange }) => (
          <FormStyled onSubmit={handleSubmit}>
            <LabelStyled>
              <FieldStyled
                id="search"
                type="search"
                name="search"
                placeholder="Search"
                onChange={handleChange}
                value={values.search}
              />
              <ButtonStyled
                type="submit"
                disabled={isSubmitting}
                onSubmit={handleSubmit}
              >
                <IconSearch />
              </ButtonStyled>
            </LabelStyled>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};
