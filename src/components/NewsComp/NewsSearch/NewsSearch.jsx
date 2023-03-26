import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addQuery } from 'redux/query/slice';
import {
  ButtonStyled,
  FormStyled,
  FieldStyled,
  LabelStyled,
  IconSearch,
} from './NewsSearch.styled';
import { onInfo } from 'components/helpers/Messages/NotifyMessages';

export const NewsSearch = ({ onSubmit }) => {
  // const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values, { setSubmitting }) => {
        if (values.search === '') {
          onInfo('Fill the field!');
          setSubmitting(false);
        } else {
          onSubmit(values.search);
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
  );
};
export default NewsSearch;
