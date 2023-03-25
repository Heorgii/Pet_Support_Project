import { useState } from 'react';
import { useDispatch } from 'react-redux'; //useSelector
import { useFormik, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import registerSchema from '../Schemas/schemas';

// import { selectIsLoading } from '../../redux/auth/selectors';
// import { register } from '../../redux/auth/operations';

import {
  FormRegister,
  FormContainer,
  Input,
  Button,
  Title,
  ErrBox,
  BackButton,
  // PhoneInput,
  ShowPassword,
  StyledLink,
  BoxText,
  Background,
  // SpinerWrapper,
} from './RegisterForm.styled';

// const phoneNumberMask = [
//   '+',
//   /\d/,
//   /\d/,
//   /\d/,

//   /\d/,
//   /\d/,

//   /\d/,
//   /\d/,
//   /\d/,

//   /\d/,
//   /\d/,

//   /\d/,
//   /\d/,
// ];

const RegisterForm = () => {
  const [isShown, setIsShown] = useState(true); //
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  // const loading = useSelector(selectIsLoading);
  // const {is}= useAuth();
  const dispatch = useDispatch();
  const register = useState(false);

  const showForm = () => {
    setIsShown(false);
  };

  const hideForm = () => {
    setIsShown(true);
  };

  const onSubmit = values => {
    const { name, email, password, phone, location } = values;
    dispatch(
      register({
        name,
        email,
        password,
        phone,
        location,
      }),
      hideForm(),
    );
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      location: '',
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    (formik.errors.confirmPassword && formik.touched.confirmPassword) ||
    formik.values.email === '' ||
    formik.values.confirmPassword === ''
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };
  return (
    <>
      {/* {loading ? (
        <SpinerWrapper>
          {/* <Spinner /> */}
      {/* </SpinerWrapper> */}
      {/* ) : (  */}
      <FormContainer>
        <Formik validationSchema={registerSchema}>
          <FormRegister onSubmit={formik.handleSubmit} autoComplete="off">
            <Title>Register</Title>
            {isShown && (
              <>
                <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  validate={registerSchema.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />

                {formik.errors.email || formik.touched.email ? (
                  <ErrBox>{formik.errors.email}</ErrBox>
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
                    <ErrBox>{formik.errors.password}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {isShown && (
              <>
                <div>
                  <Input
                    name="confirmPassword"
                    type={showConfirmPass ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur}
                  />
                  <ShowPassword onClick={showConfirmPassword}>
                    {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
                  </ShowPassword>
                  {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword ? (
                    <ErrBox>{formik.errors.confirmPassword}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {isShown && (
              <Button type="button" onClick={showForm} disabled={isValid}>
                Next
              </Button>
            )}
            {!isShown && (
              <>
                <div>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.name && formik.touched.name ? (
                    <ErrBox>{formik.errors.name}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {!isShown && (
              <>
                <div>
                  <Input
                    name="location"
                    type="text"
                    placeholder="Location, region"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    onBlur={formik.handleBlur}
                  />

                  {formik.errors.location && formik.touched.location ? (
                    <ErrBox>{formik.errors.location}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {!isShown && (
              <>
                <div>
                  <Input
                    // mask={phoneNumberMask}
                    id="phone"
                    type="phone"
                    placeholder="Mobile phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                    name="phone"
                  />

                  {formik.errors.phone && formik.touched.phone ? (
                    <ErrBox>{formik.errors.phone}</ErrBox>
                  ) : null}
                </div>
              </>
            )}
            {!isShown && <Button type="submit">Register</Button>}
            {!isShown && (
              <BackButton type="button" onClick={hideForm}>
                Back
              </BackButton>
            )}
            <BoxText>
              <span>Already have an account?</span>{' '}
              <StyledLink to="/login">Login</StyledLink>
            </BoxText>
          </FormRegister>
        </Formik>
        <Background></Background>
      </FormContainer>
      {/*  )} */}
    </>
  );
};

export default RegisterForm;
