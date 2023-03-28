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

export const NewsSearch = ({ sendSearch, reset }) => {
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
sendSearch(searchQuery)
          setSubmitting(false);
        }
      }}
      setSearchQuery
      onChange={values => {
        setSearchQuery(values.search);
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
                      e.target.value === '' && sendSearch('');
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
  );
};
