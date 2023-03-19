// import { SEO } from 'utils/SEO';
import OurFriendsComp  from 'components/OurFriendsComp/OurFriendsComp';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';

const OurFriends = () => {
  return (
    <main>
      {/* <SEO
        title="Our friends"
        description="You can see all of our company of friends"
      /> */}
      <Container>
        <Title as="h1" hidden>Our Friends Page</Title>
        <OurFriendsComp />
      </Container>
    </main>
  );
};

export default OurFriends;