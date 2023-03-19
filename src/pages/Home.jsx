import { Helmet } from 'react-helmet-async';
import Register from '../components/RegisterForm/RegisterForm';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1>Home page</h1>
      <Register />
    </div>
  );
};

export default HomePage;
