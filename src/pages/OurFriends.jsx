// import axios from 'axios';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { OurFriendsList } from 'components/OurFriendsComp/OurFriendsList/OurFriendsList';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';

import sponsors from 'components/OurFriendsComp/sponsors.json';

// api service
// const BASE_URL = 'http://localhost:3000/Pet_Support_Project';
// const pathParams = '/friends';

// async function fetchData() {
//   const axiosInstance = axios.create({
//     baseURL: `${BASE_URL}${pathParams}`,
//     headers: { 'Content-Type': 'application/json' },
//   });

//   return await axiosInstance.get();
// }

const OurFriends = () => {
  const [friends, setFriends] = useState(sponsors);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await fetchData();
  //       setFriends(data.friends);
  //       if (data.sponsors) {
  //         return onFetchError('Whoops, something went wrong');
  //       }
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getData();
  // }, []);

  return (
    <main>
      <SEO
        title="Our friends"
        description="You can see all of our company of friends"
      />
      <Container>
        <Title as="h1">Our Friends Page</Title>
        <OurFriendsList friends={friends} />
        {/* {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        {friends.length > 0 && !error && <OurFriendsList friends={friends} />} */}
      </Container>
    </main>
  );
};

export default OurFriends;

// fetchData.propTypes = {
//   pathParams: PropTypes.string.isRequired,
// };
