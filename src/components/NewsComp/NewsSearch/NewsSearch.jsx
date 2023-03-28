import { useState } from 'react';
import { Formik } from 'formik';
import {
  ButtonStyled,
  FormStyled,
  FieldStyled,
  LabelStyled,
  IconSearch,
} from './NewsSearch.styled';
import { onInfo } from 'components/helpers/Messages/NotifyMessages';

export const NewsSearch = ({ onSubmit, reset }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values, { setSubmitting }) => {
        if (values.search === '') {
          onInfo('Fill the field!');
          setSubmitting(false);
          reset();
        } else {
          setSearchQuery(values.search);
          onSubmit(values.search);
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
              value={values.search}
              onChange={e => {
                // debugger;
                handleChange(e);
                document
                  .querySelector('#search')
                  .addEventListener('input', e => {
                    e.target.value.trim() === '' && onSubmit('');
                  });
              }}
            />
            <ButtonStyled
              type="submit"
              disabled={isSubmitting}
              onSubmit={handleSubmit}
            >
              {values.search === searchQuery && values.search !== '' ? (
                <IconSearch hidden />
              ) : (
                <IconSearch />
              )}
            </ButtonStyled>
          </LabelStyled>
        </FormStyled>
      )}
    </Formik>
  );
};
