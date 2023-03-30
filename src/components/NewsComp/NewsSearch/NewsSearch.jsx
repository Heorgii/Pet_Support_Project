import { Formik } from 'formik';
import {
  ButtonStyled,
  FormStyled,
  FieldStyled,
  LabelStyled,
  IconSearch,
} from './NewsSearch.styled';
import { onInfo } from 'components/helpers/Messages/NotifyMessages';
import { useDispatch } from 'react-redux';
import { addQuery } from 'redux/query/slice';
import { addPage } from 'redux/pagination/slice';

export const NewsSearch = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values, { setSubmitting }) => {
        if (values.search === '') {
          onInfo('Fill the field!');
          setSubmitting(false);
        } else {
          setTimeout(() => {
            dispatch(addPage(1));
          }, 100);
          setTimeout(() => {
            dispatch(addQuery(values.search));
          }, 100);
          setSubmitting(false);
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
                      setTimeout(() => {
                        dispatch(addPage(1));
                        dispatch(addQuery(''));
                      }, 100);
                    }
                  });
              }}
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
