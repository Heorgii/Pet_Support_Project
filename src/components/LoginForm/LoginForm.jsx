import { useState } from 'react';
import { useDispatch } from 'react-redux'; //useSelector
import { useFormik, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
// import schemasLogin from '../LoginForm/ShemaesLogin/schemasLogin';
import * as Yup from 'yup';

import {
    FormContainer,
    Title,
    FormLogin,
    ShowPassword,
    Input,
    Button,
    ErrorBox,
    StyledLink,
    BoxText,
    Background,
} from './LoginForm.styled';

const schemasLogin = Yup.object().shape({
    email: Yup.string()
      .matches(/^\s*\S+\s*$/, 'Email must be without spaces')
      .matches(/\S{7,}/, 'Email too short (min 7 symbols)')
      .matches(
        /^(?=.{7,63}$)([^а-яА-Я]+@([a-zA-Z]+\.)+[a-zA-z]{2,3})$/g,
        'Invalid email',
      )
      .matches(
        /^[^-]+((.*[^-]))*@([a-zA-Z]+\.)+[a-zA-z]{2,3}$/g,
        'Dashes should only be inside email',
      )
      .required('Require'),
    password: Yup.string()
      .min(7, 'Password too short (min 7)')
      .max(32, 'Password too long (max 32)')
      .matches(/^\s*\S+\s*$/, 'Password must be without spaces')
      .required('Require'),
    });

export const LoginForm = () => {
  const [isShown, setIsShown] = useState(true); //
  const [showPass, setShowPass] = useState(false);

  const dispatch = useDispatch();
  const register = useState(false);


  const hideForm = () => {
    setIsShown(true);
  };

  const onSubmit = values => {
    const { email, password } = values;
    dispatch(
      register({
        email,
        password,
      }),
      hideForm(),
    );
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schemasLogin,
    onSubmit,
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    formik.values.email === ''
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <>
      <FormContainer>
        <Formik validationSchema={schemasLogin}>
          <FormLogin onSubmit={formik.handleSubmit} autoComplete="off">
            <Title>Login</Title>
            {isShown && (
              <>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    validate={schemasLogin.email}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.email || formik.touched.email ? (
                    <ErrorBox>{formik.errors.email}</ErrorBox>
                  ) : null}
                </div>
              </>
            )}

            {isShown && (
              <>
                <div>
                  <Input
                    name="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />

                  <ShowPassword onClick={showPassword}>
                    {!showPass ? <ImEyeBlocked /> : <ImEye />}
                  </ShowPassword>
                  {formik.errors.password && formik.touched.password ? (
                    <ErrorBox>{formik.errors.password}</ErrorBox>
                  ) : null}
                </div>
              </>
            )}

            {isShown && (
              <Button type="button" disabled={isValid}>
                Login
              </Button>
            )}

            {!isShown && <Button type="submit">Login</Button>}
            <BoxText>
              <span>Already have an account?</span>{' '}
              <StyledLink to="/register">Register</StyledLink>
            </BoxText>
          </FormLogin>
        </Formik>
        <Background></Background>
      </FormContainer>

    </>
  );
};

export default LoginForm;
