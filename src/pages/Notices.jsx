import { NoticesComp } from 'components/NoticesComp/NoticesComp';
import { Section, Container } from 'components/baseStyles/CommonStyle.styled';
import { Helmet } from 'react-helmet-async';

const Notices = () => {
  return (
    <div>
      <Helmet>
        <title>Find pet</title>
      </Helmet>
      <Section>
        <Container>
          <NoticesComp />
        </Container>
      </Section>
    </div>
  );
};

export default Notices;
