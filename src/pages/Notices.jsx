import { NoticesComp } from 'components/NoticesComp/NoticesComp';
import { Helmet } from 'react-helmet';

const Notices = () => {
  return (
    <section>
      <Helmet>
        <title>Find pet</title>
      </Helmet>
      <NoticesComp />
    </section>
  );
};
export default Notices;
