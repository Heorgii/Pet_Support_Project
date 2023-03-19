import { Helmet } from 'react-helmet-async';
import Register from '../components/RegisterForm/RegisterForm';
// import { Header } from '../components/Header/Header';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* <Header /> */}
      <Register />
    </div>
  );
};

export default HomePage;
