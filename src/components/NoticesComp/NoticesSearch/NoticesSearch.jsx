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
import { onInfo } from 'components/helpers/Messages/NotifyMessages';
import { useDispatch } from 'react-redux';
import { addQuery } from 'redux/query/slice';
import { addPage } from 'redux/pagination/slice';

export const NoticesSearch = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Title>Find your favorite pet</Title>

      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, actions) => {
          if (values.search === '') {
            onInfo('Fill the field!');
            actions.setSubmitting(false);
          } else {
            dispatch(addQuery(values.search));
            dispatch(addPage(1));
            actions.setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, values, handleSubmit, handleChange }) => (
          <FormStyled onSubmit={handleSubmit} autoComplete="off">
            <LabelStyled>
              <FieldStyled
                id="search"
                type="search"
                name="search"
                placeholder="Search"
                value={values.search}
                onChange={e => {
                  handleChange(e);
                  document
                    .querySelector('#search')
                    .addEventListener('input', e => {
                      if (e.target.value === '') {
                        dispatch(addPage(1));
                        dispatch(addQuery(''));
                      }
                    });
                }}
              />
              <div>
                <ButtonStyled
                  type="submit"
                  disabled={isSubmitting}
                  onSubmit={handleSubmit}
                >
                  <IconSearch />
                </ButtonStyled>
              </div>
            </LabelStyled>
          </FormStyled>
        )}
      </Formik>
    </div>
  );
};
