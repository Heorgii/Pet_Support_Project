import { SEO } from 'utils/SEO';
import { OurFriendsList } from 'components/OurFriendsComp/OurFriendsList/OurFriendsList';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';

export const OurFriends = () => {
  return (
    <main>
      <SEO
        title="Our friends"
        description="You can see all of our company of friends"
      />
      <Container>
        <Title as="h1">Our Friends Page</Title>
        <OurFriendsList />
      </Container>
    </main>
  );
};
