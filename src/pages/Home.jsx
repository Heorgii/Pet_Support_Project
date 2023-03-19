import { Helmet } from 'react-helmet';
import { Header } from '../components/Header/Header';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
    </div>
  );
};
