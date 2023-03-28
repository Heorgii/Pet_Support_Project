import { useState } from 'react';
import { useDispatch } from 'react-redux'; //useSelector
import { useFormik, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import schemas from 'components/Schemas/schemas';
import { baseColor } from 'components/baseStyles/Variables.styled';

import {
  FormContainer,
  Title,
  FormLogin,
  ShowPassword,
  Input,
  Button,
  StyledLink,
  BoxText,
  Background,
  IconValid,
  IconInValid,
} from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const [isShown, setIsShown] = useState(true); //
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();

  const hideForm = () => {
    setIsShown(true);
  };

  const onSubmit = values => {
    const { email, password } = values;
    dispatch(
      logIn({
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
    validationSchema: schemas.schemasLogin,
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

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue ? null : isValide ? '#E2001A' : '#3CBC81';
  };
  return (
    <>
      <FormContainer>
        <Formik validationSchema={schemas.schemasLogin}>
          <FormLogin onSubmit={formik.handleSubmit} autoComplete="off">
            <Title>Login</Title>
            {isShown && (
              <>
                <div>
                  <Input
                    style={{
                      borderColor: showAccentValidateInput(
                        formik.values.email,
                        formik.errors.email,
                      ),
                    }}
                    name="email"
                    type="email"
                    placeholder="Email"
                    validate={schemas.schemasLogin.email}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  {!formik.values.email ? null : !formik.errors.email ? (
                    <IconValid color={baseColor.colors.success} />
                  ) : (
                    <IconInValid color={baseColor.colors.error} />
                  )}
                  {/* {formik.errors.email || formik.touched.email ? (
                    <ErrorBox>{formik.errors.email}</ErrorBox>
                  ) : null} */}
                </div>
              </>
            )}

            {isShown && (
              <>
                <div>
                  <Input
                    style={{
                      borderColor: showAccentValidateInput(
                        formik.values.password,
                        formik.errors.password,
                      ),
                    }}
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
                  {/* {formik.errors.password && formik.touched.password ? (
                    <ErrorBox>{formik.errors.password}</ErrorBox>
                  ) : null} */}
                </div>
              </>
            )}

            {isShown && (
              <Button type="submit" disabled={isValid}>
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
