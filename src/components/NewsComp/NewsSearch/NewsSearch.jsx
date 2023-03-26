import React from 'react';
import { Formik } from 'formik';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { addQuery } from 'redux/query/slice';
import {
 
  ButtonStyled,
  FormStyled,
  FieldStyled,
  LabelStyled,
  IconSearch,
} from './NewsSearch.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';

export const NewsSearch = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Title>News</Title>

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
