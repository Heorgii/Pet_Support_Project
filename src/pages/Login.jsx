import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default Login;
