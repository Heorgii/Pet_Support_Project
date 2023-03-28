import { useState } from 'react';
import { useDispatch } from 'react-redux'; //useSelector
import { useFormik, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import { FaCheck, FaTimes } from 'react-icons/fa';
import schemas from 'components/Schemas/schemas';
import { register } from 'redux/auth/operations';
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
  // Icon,
  StyledLink,
  BoxText,
  Background,
  // SpinerWrapper,
} from './RegisterForm.styled';
import usePlacesAutocomplete from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { Li } from 'components/NoticesComp/AddNoticeButton/AddNoticeModal/AddNoticeModal.styled';

const RegisterForm = () => {
  const [isShown, setIsShown] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = ({ values, action }) => {
    console.log('!!!!!!: ', values);
    const { name: userName, email, password, phone, location } = values;
    dispatch(
      register({
        userName,
        email,
        password,
        phone,
        location,
      }),
      // hideForm(),
    );
  };

  const showForm = () => {
    setIsShown(false);
  };

  const hideForm = () => {
    setIsShown(true);
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
    validationSchema: schemas.registerSchema,
    onSubmit: (values, action) => {
      console.log('form values: ', values);
      onSubmit({ values, action });
    },
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

  const {
    ready,
    suggestions: { data, status },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = e => {
    setValue(e.target.value);
  };

  const renderSuggestions = setFieldValue =>
    data.map(suggestion => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <Li
          key={place_id}
          onClick={() => {
            setFieldValue('location', suggestion.description);
            clearSuggestions();
          }}
        >
          {main_text}
          {', '}
          {secondary_text}
        </Li>
      );
    });

  return (
    <>
      {/* {loading ? (
        <SpinerWrapper>
          {/* <Spinner /> */}
      {/* </SpinerWrapper> */}
      {/* ) : (  */}
      <FormContainer>
        <Formik validationSchema={schemas.registerSchema}>
          <FormRegister onSubmit={formik.handleSubmit} autoComplete="off">
            {' '}
            {/* formik. */}
            <Title>Register</Title>
            {isShown && (
              <>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    validate={schemas.registerSchema.email}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  <div>
                    {/* <Icon> */}
                    <input
                      type="text"
                      value={formik.values.email}
                      validate={schemas.registerSchema.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {isValid ? (
                      <FaCheck color="green" />
                    ) : (
                      <FaTimes color="red" />
                    )}
                    {formik.errors.email && formik.touched.email ? (
                      <ErrBox>{formik.errors.email}</ErrBox>
                    ) : null}
                    {/* </Icon> */}
                  </div>
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
                <div ref={ref}>
                  <Input
                    name="location"
                    type="text"
                    placeholder="Location, region"
                    value={formik.values.location}
                    onBlur={formik.handleBlur}
                    disabled={!ready}
                    onChange={e => {
                      formik.handleChange(e);
                      handleInput(e);
                    }}
                  />
                  {status === 'OK' && (
                    <ul>{renderSuggestions(formik.setFieldValue)}</ul>
                  )}

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
